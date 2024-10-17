import { useEffect } from 'react'

import { ROUTES_URL } from '@/shared/const'
import { getRootLayout } from '@/shared/layouts'
import { GoogleAuth } from '@/widgets/GoogleAuth'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  const { code } = router.query as { code: string }

  if (code) {
    return <GoogleAuth code={code} />
  }

  useEffect(() => {
    if (!code) {
      void router.push(ROUTES_URL.PUBLIC_PAGE)
    }
  }, [code, router])

  return null
}

Page.getLayout = getRootLayout
export default Page
