import { useMeQuery } from '@/shared/api/authApi'
import { ProfileType, PublicProfileType } from '@/shared/api/profileApi'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Avatar, Button, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './ProfileHeader.module.scss'

import { UserButtons, UsersCountInfo } from './features'

type PropsType = {
  isAuth: boolean
  postsTotalCount: number | undefined
  user: ProfileType | PublicProfileType
}

export const ProfileHeader = ({ isAuth, postsTotalCount = 0, user }: PropsType) => {
  const { data: me } = useMeQuery()
  const { text } = useTranslation()
  const t = text.pages.profile.main

  return (
    <div className={s.mainInfo}>
      <Avatar
        className={s.avatarPhoto}
        size={204}
        src={user?.avatars[0]?.url}
        userName={'my profile'}
      />
      <div className={s.infoAboutMe}>
        <div className={s.nameAndBtn}>
          <Typography variant={'h1'}> {user?.userName}</Typography>
          {isAuth &&
            (user.id === me?.userId ? (
              <Button as={Link} href={ROUTES_URL.GENERAL_INFO} variant={'secondary'}>
                {t.profileSettings}
              </Button>
            ) : (
              <UserButtons />
            ))}
        </div>
        <div className={s.counting}>
          <UsersCountInfo count={2232} name={t.following} />
          <UsersCountInfo count={2311} name={t.followers} />
          <UsersCountInfo count={postsTotalCount} name={t.publications} />
        </div>
        <div className={s.description}>
          <Typography variant={'regularText16'}>{user?.aboutMe}</Typography>
        </div>
      </div>
    </div>
  )
}
