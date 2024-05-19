import React from 'react'

import {UsersCountInfo} from '@/pages/profile/features/usersCountInfo'
import {useMeQuery} from '@/shared/api/profileApi'
import {ROUTES_URL} from '@/shared/const'
import {getProtectedNavbarLayout} from '@/shared/layouts'
import {useTranslation} from '@/shared/lib/hooks'
import {Avatar, Button, HeadMeta, Typography} from '@/shared/ui'
import Link from 'next/link'

import s from './ProfilePage.module.scss'
import {useGetUserPostsQuery} from "@/shared/api/postsApi";
import {ViewPostModal} from "@/widgets/ViewPostModal";
import Image from "next/image";

const ProfilePage = () => {
    const {text} = useTranslation()
    const t = text.pages.profile.main
    const {data: userInfo} = useMeQuery()
    const avatar = userInfo?.avatarUrl
    const userName = userInfo?.username
    const myId = userInfo?.id
    const myFollowing = 2281
    const myFollowers = 2058
    const myPublications = 20


    const {data: userPosts} = useGetUserPostsQuery({})


    return (
        <>
            <HeadMeta title={'Profile'}/>
            <main className={s.rootPage}>
                <div className={s.mainInfo}>
                    <Avatar className={s.avatarPhoto} size={204} src={avatar} userName={'my profile'}/>
                    <div className={s.infoAboutMe}>
                        <div className={s.nameAndBtn}>
                            <Typography variant={'h1'}> {userInfo?.username}</Typography>
                            <Button as={Link} href={ROUTES_URL.GENERAL_INFO} variant={'secondary'}>
                                {t.profileSettings}
                            </Button>
                        </div>
                        <div className={s.counting}>
                            <UsersCountInfo count={myFollowing} name={t.following}/>
                            <UsersCountInfo count={myFollowers} name={t.followers}/>
                            <UsersCountInfo count={myPublications} name={t.publications}/>
                        </div>
                        <div className={s.description}>
                            <Typography variant={'regularText16'}>{userInfo?.aboutMe}</Typography>
                        </div>
                    </div>
                </div>
                <div className={s.postsList}>
                    {userPosts && userPosts.map(post =>(
                        <ViewPostModal avatar={avatar || ""} createdAt={post.createdAt} description={post.description} id={post.id} imageUrls={post.imagesUrl} isMyPost={myId === post.authorId} userName={userName || ''}/>
                    ))}

                </div>
            </main>
        </>
    )
}

ProfilePage.getLayout = getProtectedNavbarLayout
export default ProfilePage
