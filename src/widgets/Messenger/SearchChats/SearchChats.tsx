import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { MessageViewDto, useGetLatestMessagesQuery } from '@/shared/api/messengerApi'
import { useDebounce, useTranslation } from '@/shared/lib/hooks'
import { Input, ScrollArea, Typography } from '@/shared/ui'
import { LatestChat } from '@/widgets/Messenger/LatestChat'

import s from './SearchChats.module.scss'
import { latestChat } from '@/widgets/Messenger/LatestChat/LatestChat.stories'
import { useMeQuery } from '@/shared/api/authApi'

export const SearchChats = () => {
  const { text } = useTranslation()
  const t = text.pages.messenger
  const [searchChat, setSearchChat] = useState<string>('')
  const [foundChats, setFoundChats] = useState<MessageViewDto[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [cursor, setCursor] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const debounceValue = useDebounce(searchChat, 500)
  const { data: myInfo } = useMeQuery()
  const myId = myInfo?.userId
  const { data: latestChats } = useGetLatestMessagesQuery(
    {
      cursor,
      pageSize: 12,
      searchName: debounceValue,
    },
    { skip: !debounceValue }
  )

  useEffect(() => {
    if (latestChats?.items) {
      setTotalCount(latestChats.totalCount)
      setFoundChats(prevState => [...prevState, ...latestChats.items])
    }
  }, [latestChats])

  const fetchMoreChats = () => {
    setLoading(true)
    setCursor(foundChats[foundChats.length - 1]?.id || 0)
  }

  const handleSearch = (value: string) => {
    setSearchChat(value)
    setCursor(0)
  }

  return (
    <div className={s.latestChatsWrapper} style={{ maxWidth: '270px' }}>
      <div className={s.searchInput}>
        <Input
          onValueChange={handleSearch}
          placeholder={text.pages.searchUsers.title}
          type={'search'}
          value={searchChat}
        />
      </div>
      <ScrollArea>
        <InfiniteScroll
          dataLength={foundChats.length}
          endMessage={
            <div style={{ margin: '10px 0', textAlign: 'center' }}>
              <Typography variant={'regularText14'}>{t.noMoreChats}</Typography>
            </div>
          }
          hasMore={foundChats.length <= totalCount}
          loader={
            loading && (
              <div style={{ margin: '10px 0', textAlign: 'center' }}>
                <Typography variant={'regularText14'}>{t.loadingChats}</Typography>
              </div>
            )
          }
          next={fetchMoreChats}
        >
          <div className={s.latestChats}>
            {foundChats.map(chat => (
              <LatestChat isMyMsg={chat.ownerId === myId} key={chat.id} latestChatData={chat} />
            ))}
          </div>
        </InfiniteScroll>
      </ScrollArea>
    </div>
  )
}
