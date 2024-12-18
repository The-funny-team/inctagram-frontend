import { useEffect, useState } from 'react'

import {
  GetPublicationsResponseItem,
  useGetPublicationsFollowersQuery,
} from '@/shared/api/postsApi'
import { Loader } from '@/shared/ui'

import { HomePost } from './HomePost'

export const Home = () => {
  const [endCursorPostId, setEndCursorPostId] = useState(0)
  const [allPublications, setAllPublications] = useState<GetPublicationsResponseItem[]>([])
  const { data: publications, isLoading } = useGetPublicationsFollowersQuery({
    endCursorPostId,
    pageSize: 12,
  })

  useEffect(() => {
    if (publications && publications.items.length !== 0) {
      setAllPublications(prevPosts => [...prevPosts, ...publications.items])
    }
  }, [publications])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight

      if (windowHeight + scrollTop >= fullHeight - 100) {
        if (publications) {
          setEndCursorPostId(publications.nextCursor)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [publications, allPublications])

  if (isLoading) {
    return <Loader />
  }

  if (!publications) {
    return null
  }

  return (
    <div style={{ paddingLeft: '175px', paddingTop: '30px' }}>
      {allPublications.map(publication => (
        <HomePost key={publication.id} post={publication} />
      ))}
    </div>
  )
}
