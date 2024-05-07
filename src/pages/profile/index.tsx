import {getProtectedNavbarLayout} from '@/shared/layouts'
import {Avatar, Button, HeadMeta, Typography} from '@/shared/ui'
import s from './ProfilePage.module.scss'
import {useMeQuery} from "@/shared/api/profileApi";
import React from "react";
import Link from "next/link";
import {ROUTES_URL} from "@/shared/const";

const ProfilePage = () => {
    const {data: userInfo} = useMeQuery()
    const avatar = userInfo?.avatarUrl

    return (
        <>
            <HeadMeta title={'Profile'}/>
            <main className={s.rootPage}>
                <div className={s.mainInfo} >
                    <Avatar className={s.avatarPhoto} size={204} src={avatar} userName={'my profile'}/>
                    <div className={s.infoAboutMe}>
                        <div className={s.nameAndBtn}>
                            <Typography  variant={'h1'}> URLProfiele</Typography>
                            <Button as={Link} href={ROUTES_URL.GENERAL_INFO} variant={'secondary'}>Profile Settings</Button>
                        </div>
                        <div className={s.counting}>
                            <div>
                                <Typography variant={'boldText14'}>2 218</Typography>
                                <Typography variant={'regularText14'}>Following</Typography>
                            </div>
                            <div>
                                <Typography variant={'boldText14'}>2 218</Typography>
                                <Typography variant={'regularText14'}>Followers</Typography>
                            </div>
                            <div>
                                <Typography variant={'boldText14'}>2 218</Typography>
                                <Typography variant={'regularText14'}>Publications</Typography>
                            </div>

                        </div>
                        <div className={s.description}>
                            <Typography variant={'regularText16'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

ProfilePage.getLayout = getProtectedNavbarLayout
export default ProfilePage
