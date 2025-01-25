import { GetUserProfileResponse, User_Count_Info } from '@/shared/api/followApi'
import { PublicProfileType } from '@/shared/api/profileApi'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Avatar, Button, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './ProfileHeader.module.scss'

import { UserButtons, UsersCountInfo } from './features'

type PropsType = {
  isAuth: boolean
  myId: number
  user: GetUserProfileResponse | PublicProfileType
}

export const ProfileHeader = ({ isAuth, myId, user }: PropsType) => {
  const { text } = useTranslation()
  const t = text.pages.profile.main
  const followingCount =
    User_Count_Info.FOLLOWING_COUNT in user ? user.followingCount : user.userMetadata.following
  const followersCount =
    User_Count_Info.FOLLOWERS_COUNT in user ? user.followersCount : user.userMetadata.followers
  const publicationsCount =
    User_Count_Info.PUBLICATIONS_COUNT in user
      ? user.publicationsCount
      : user.userMetadata.publications

  return (
    <div className={s.mainInfo}>
      <Avatar
        className={s.avatarPhoto}
        size={204}
        src={(user?.avatars && user?.avatars[0]?.url) || ''}
        userName={user.userName}
      />
      <div className={s.infoAboutMe}>
        <div className={s.nameAndBtn}>
          <Typography variant={'h1'}> {user?.userName}</Typography>
          {isAuth &&
            (user.id === myId ? (
              <Button as={Link} href={ROUTES_URL.GENERAL_INFO} variant={'secondary'}>
                {t.profileSettings}
              </Button>
            ) : (
              <UserButtons />
            ))}
        </div>
        <div className={s.counting}>
          <UsersCountInfo count={followingCount} name={t.following} />
          <UsersCountInfo count={followersCount} name={t.followers} />
          <UsersCountInfo count={publicationsCount} name={t.publications} />
        </div>
        <div className={s.description}>
          <Typography variant={'regularText16'}>{user?.aboutMe}</Typography>
        </div>
      </div>
    </div>
  )
}
