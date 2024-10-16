import { useState } from 'react'

import {
  CreateIcon,
  FavoritesIcon,
  FilledCreateIcon,
  FilledFavoritesIcon,
  FilledHomeIcon,
  FilledMessengerIcon,
  FilledProfileIcon,
  HomeIcon,
  LogOutIcon,
  MessengerIcon,
  ProfileIcon,
  SearchOutlineIcon,
  StatisticsIcon,
} from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { LogOutModal } from '@/shared/layouts/NavbarLayout/LogOutModal/LogOutModal'
import { useTranslation } from '@/shared/lib/hooks'
import { Button } from '@/shared/ui'
import { CreatePost } from '@/widgets/CreatePost'
import clsx from 'clsx'
import Link from 'next/link'

import s from './NavBar.module.scss'

type Props = {
  className?: string
}

export const NavBar = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [logOutModalIsOpen, setLogOutModalIsOpen] = useState<boolean>(false)

  const {
    router,
    text: {
      layout: { navBar: t },
    },
  } = useTranslation()

  const pathname = '/'.concat(router.pathname.split('/')[1])

  const shouldActive = (value: boolean) => {
    return !isOpen && value
  }

  return (
    <aside className={clsx(s.root, className)}>
      <nav className={s.nav}>
        <Button
          as={Link}
          className={clsx(s.button, shouldActive(pathname === ROUTES_URL.HOME) && s.active)}
          href={ROUTES_URL.HOME}
        >
          {pathname === ROUTES_URL.HOME ? <FilledHomeIcon /> : <HomeIcon />}
          {t.home}
        </Button>

        <Button className={clsx(s.button, isOpen && s.active)} onClick={() => setIsOpen(true)}>
          {isOpen ? <FilledCreateIcon /> : <CreateIcon />}
          {t.create}
        </Button>

        <Button
          as={Link}
          className={clsx(s.button, shouldActive(pathname === ROUTES_URL.PROFILE) && s.active)}
          href={ROUTES_URL.PROFILE}
        >
          {shouldActive(pathname === ROUTES_URL.PROFILE) ? <FilledProfileIcon /> : <ProfileIcon />}
          {t.profile}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, shouldActive(pathname === ROUTES_URL.MESSENGER) && s.active)}
          href={ROUTES_URL.MESSENGER}
        >
          {shouldActive(pathname === ROUTES_URL.MESSENGER) ? (
            <FilledMessengerIcon />
          ) : (
            <MessengerIcon />
          )}
          {t.messenger}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, shouldActive(pathname === ROUTES_URL.SEARCH) && s.active)}
          href={ROUTES_URL.SEARCH}
        >
          <SearchOutlineIcon />
          {t.search}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, shouldActive(pathname === ROUTES_URL.STATISTICS) && s.active)}
          href={ROUTES_URL.STATISTICS}
        >
          <StatisticsIcon />
          {t.statistics}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, shouldActive(pathname === ROUTES_URL.FAVORITES) && s.active)}
          href={ROUTES_URL.FAVORITES}
        >
          {shouldActive(pathname === ROUTES_URL.MESSENGER) ? (
            <FilledFavoritesIcon />
          ) : (
            <FavoritesIcon />
          )}
          {t.favorites}
        </Button>
      </nav>
      <Button className={s.button} onClick={() => setLogOutModalIsOpen(true)}>
        <LogOutIcon />
        {t.logOut}
      </Button>
      <CreatePost isOpen={isOpen} isOpenChange={setIsOpen} />
      <LogOutModal isOpen={logOutModalIsOpen} setIsOpen={setLogOutModalIsOpen} />
    </aside>
  )
}
