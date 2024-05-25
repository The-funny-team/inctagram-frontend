import {
  CopyLinkOutlineIcon,
  DotsHorizontalIcon,
  FollowOutlineIcon,
  TrashOutlineIcon,
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
  isMyPost: boolean
  onDeleteMode: () => void
  onEditMode: () => void
}

export const PostManageDropdown = ({ isMyPost, onDeleteMode, onEditMode }: Props) => {
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
            <DropdownMenuItem className={s.menuItem}>
              <FollowOutlineIcon />
              <Typography as={'span'} variant={'regularText14'}>
                {t.managePostDropdown.follow}
              </Typography>
            </DropdownMenuItem>
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
