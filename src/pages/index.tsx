import { useEffect } from 'react'

import { BASE_LOCAL_URL, BASE_URL } from '@/shared/const'
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
      router.push('/profile')
    }
  }, [router])

  return null
}

Page.getLayout = getRootLayout
export default Page
