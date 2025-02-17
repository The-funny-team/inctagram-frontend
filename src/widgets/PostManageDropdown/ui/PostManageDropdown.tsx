import { useState } from 'react'
import { toast } from 'react-toastify'

import { useFollowMutation, useUnfollowMutation } from '@/shared/api/followApi'
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
  isMyFollowing?: boolean
  isMyPost: boolean
  onDeleteMode: () => void
  onEditMode: () => void
  ownerId: number
}

export const PostManageDropdown = ({
  isMyFollowing,
  isMyPost,
  onDeleteMode,
  onEditMode,
  ownerId,
}: Props) => {
  const [isFollowed, setIsFollowed] = useState(isMyFollowing)
  const { text } = useTranslation()
  const t = text.modals.viewPostModal
  const [follow] = useFollowMutation()
  const [unfollow] = useUnfollowMutation()

  const followUser = () => {
    follow({ selectedUserId: ownerId })
      .unwrap()
      .then(() => setIsFollowed(prevState => !prevState))
      .then(() => toast.success('Follow success'))
      .catch(() => toast.error('Something went wrong'))
  }

  const unfollowUser = () => {
    unfollow({ userId: ownerId })
      .unwrap()
      .then(() => setIsFollowed(prevState => !prevState))
      .then(() => toast.success('Unfollow success'))
      .catch(() => toast.error('Something went wrong'))
  }

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
            {!isFollowed && (
              <DropdownMenuItem className={s.menuItem} onClick={followUser}>
                <FollowOutlineIcon />
                <Typography as={'span'} variant={'regularText14'}>
                  {t.managePostDropdown.follow}
                </Typography>
              </DropdownMenuItem>
            )}
            {isFollowed && (
              <DropdownMenuItem className={s.menuItem} onClick={unfollowUser}>
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
