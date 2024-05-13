import {getProtectedNavbarLayout} from '@/shared/layouts'
import {Avatar, Button, HeadMeta, Typography} from '@/shared/ui'
import s from './ProfilePage.module.scss'
import {useMeQuery} from "@/shared/api/profileApi";
import React from "react";
import Link from "next/link";
import {ROUTES_URL} from "@/shared/const";
import {UsersCountInfo} from "@/pages/profile/features/usersCountInfo";
import {useTranslation} from "@/shared/lib/hooks";

const ProfilePage = () => {
    const {  text } = useTranslation()
    const t = text.pages.profile.main
    const {data: userInfo} = useMeQuery()
    const avatar = userInfo?.avatarUrl
    // const userId = userInfo?.id


    return (
        <>
            <HeadMeta title={'Profile'}/>
            <main className={s.rootPage}>
                <div className={s.mainInfo}>
                    <Avatar className={s.avatarPhoto} size={204} src={avatar} userName={'my profile'}/>
                    <div className={s.infoAboutMe}>
                        <div className={s.nameAndBtn}>
                            <Typography variant={'h1'}> {userInfo?.username}</Typography>
                            <Button as={Link} href={ROUTES_URL.GENERAL_INFO} variant={'secondary'}>{t.profileSettings}</Button>
                        </div>
                        <div className={s.counting}>
                            <UsersCountInfo count={2218} name={t.following}/>
                            <UsersCountInfo count={2218} name={t.followers}/>
                            <UsersCountInfo count={2218} name={t.publications}/>

                        </div>
                        <div className={s.description}>
                            <Typography variant={'regularText16'}>{userInfo?.aboutMe}</Typography>
                        </div>
                    </div>
                </div>
                <div className={s.postsList}></div>
            </main>
        </>
    )
}

ProfilePage.getLayout = getProtectedNavbarLayout
export default ProfilePage
