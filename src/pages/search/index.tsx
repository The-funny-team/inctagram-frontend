import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { SearchUsers } from '@/widgets/SearchUsers'

const SearchPage = () => {
  return (
    <>
      <HeadMeta title={'Search Users'} />
      <main>
        <SearchUsers />
      </main>
    </>
  )
}

SearchPage.getLayout = getProtectedNavbarLayout
export default SearchPage
