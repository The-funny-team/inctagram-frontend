import {
  CopyLinkOutlineIcon,
  DotsHorizontalIcon,
  FollowOutlineIcon,
  TrashOutlineIcon,
  UnfollowOutlineIcon,
} from '@/shared/assets'
import { EditOutlineIcon } from '@/shared/assets/icons'
import { useTranslation } from '@/shared/lib/hooks'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Typography,
} from '@/shared/ui'

import s from './PostManageDropdown.module.scss'

type Props = {
  isMyFollowing: boolean
  isMyPost: boolean
  onDeleteMode: () => void
  onEditMode: () => void
}

export const PostManageDropdown = ({
  isMyFollowing,
  isMyPost,
  onDeleteMode,
  onEditMode,
}: Props) => {
  const { text } = useTranslation()
  const t = text.modals.viewPostModal

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={s.trigger}>
        <DotsHorizontalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={s.content}>
        {isMyPost ? (
          <>
            <DropdownMenuItem className={s.menuItem}>
              <EditOutlineIcon />
              <Typography as={'span'} onClick={onEditMode} variant={'regularText14'}>
                {t.managePostDropdown.edit}
              </Typography>
            </DropdownMenuItem>
            <DropdownMenuItem className={s.menuItem}>
              <TrashOutlineIcon />
              <Typography as={'span'} onClick={onDeleteMode} variant={'regularText14'}>
                {t.managePostDropdown.delete}
              </Typography>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            {!isMyFollowing && (
              <DropdownMenuItem className={s.menuItem}>
                <FollowOutlineIcon />
                <Typography as={'span'} variant={'regularText14'}>
                  {t.managePostDropdown.follow}
                </Typography>
              </DropdownMenuItem>
            )}
            {isMyFollowing && (
              <DropdownMenuItem className={s.menuItem}>
                <UnfollowOutlineIcon />
                <Typography as={'span'} variant={'regularText14'}>
                  {t.managePostDropdown.unfollow}
                </Typography>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className={s.menuItem}>
              <CopyLinkOutlineIcon />
              <Typography as={'span'} variant={'regularText14'}>
                {t.managePostDropdown.copy}
              </Typography>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
