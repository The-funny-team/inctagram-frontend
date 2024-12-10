import { useEffect, useState } from 'react'

import { GetUsersResponseItems, useGetUsersQuery } from '@/shared/api/followApi'
import { useTranslation } from '@/shared/lib/hooks'
import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { Input, Typography } from '@/shared/ui'
import { RecentUsers } from '@/widgets/SearchUsers'
import { ShowFoundUsers } from '@/widgets/SearchUsers/ui/ShowFoundUsers'

import s from './SearchUsers.module.scss'

export const SearchUsers = () => {
  const { text } = useTranslation()
  const [foundUsers, setFoundUsers] = useState<GetUsersResponseItems[]>([])
  const [searchUser, setSearchUser] = useState<string>('')
  const [endCursorPostId, setEndCursorPostId] = useState(0)
  const debounceValue = useDebounce(searchUser, 500)
  const handleSearch = (value: string) => {
    setFoundUsers([])
    setSearchUser(value)
    setEndCursorPostId(0)
  }
  const { data } = useGetUsersQuery(
    { cursor: endCursorPostId, pageNumber: 1, pageSize: 10, search: debounceValue },
    { skip: !debounceValue }
  )

  useEffect(() => {
    if (data && data?.items.length !== 0) {
      setFoundUsers([...foundUsers, ...data.items])
    }
  }, [data])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight

      if (windowHeight + scrollTop >= fullHeight - 100) {
        setEndCursorPostId(data?.nextCursor || 0)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [data])

  return (
    <div className={s.rootSearch}>
      <Typography className={s.title} variant={'h1'}>
        {text.pages.searchUsers.title}
      </Typography>
      <Input
        onValueChange={handleSearch}
        placeholder={text.pages.searchUsers.title}
        type={'search'}
        value={searchUser}
      />
      <div>{foundUsers && searchUser && <ShowFoundUsers users={foundUsers} />}</div>
      {!searchUser.trim() && <RecentUsers />}
    </div>
  )
}
