import { useState } from 'react'
import { toast } from 'react-toastify'

import { useFollowMutation, useUnfollowMutation } from '@/shared/api/followApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Button } from '@/shared/ui'

import s from './userButtons.module.scss'

type PropsType = {
  isFollowing: boolean
  updateInfo?: () => void
  userId: number
}
export const UserButtons = ({ isFollowing, updateInfo, userId }: PropsType) => {
  const { text } = useTranslation()
  const t = text.pages.profile.main
  const [isFollow, setIsFollow] = useState(isFollowing)
  const [follow, { isLoading: followLoading }] = useFollowMutation()
  const [unfollow, { isLoading: unfollowLoading }] = useUnfollowMutation()
  const followUser = () => {
    follow({ selectedUserId: userId })
      .unwrap()
      .then(() => setIsFollow(prevState => !prevState))
      .then(() => {
        if (updateInfo) {
          updateInfo()
        }
      })
      .then(() => toast.success('Follow success'))
      .catch(() => toast.error('follow error'))
  }

  const unfollowUser = () => {
    unfollow({ userId })
      .unwrap()
      .then(() => setIsFollow(prevState => !prevState))
      .then(() => {
        if (updateInfo) {
          updateInfo()
        }
      })
      .then(() => toast.success('Unfollow success'))
      .catch(() => toast.error('unfollow error'))
  }
  const sendMessage = () => {}

  return (
    <div className={s.rootButtons}>
      {!isFollow ? (
        <Button onClick={followUser} variant={'primary'}>
          {t.follow}
        </Button>
      ) : (
        <Button onClick={unfollowUser} variant={'tertiary'}>
          {t.unFollow}
        </Button>
      )}
      <Button onClick={sendMessage} variant={'secondary'}>
        {t.sendMessage}
      </Button>
    </div>
  )
}
