import { useGetPublicationsFollowersQuery } from '@/shared/api/postsApi'
import { Loader } from '@/shared/ui'

import { HomePost } from './HomePost'

export const Home = () => {
  const { data, isLoading } = useGetPublicationsFollowersQuery({})

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return
  }

  return (
    <div style={{ paddingLeft: '175px', paddingTop: '30px' }}>
      {data.items.map(publication => (
        <HomePost key={publication.id} post={publication} />
      ))}
    </div>
  )
}
