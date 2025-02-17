import { useEffect } from 'react'

import { ACCESS_TOKEN, ROUTES_URL } from '@/shared/const'
import { saveToLocalStorage } from '@/shared/lib/helpers'
import { useRouter } from 'next/router'

export const GitHubAuth = () => {
  const router = useRouter()
  const { accessToken } = router.query as { accessToken: string }

  useEffect(() => {
    if (accessToken) {
      saveToLocalStorage(ACCESS_TOKEN, accessToken)
      void router.push(ROUTES_URL.PROFILE)
    }
  }, [accessToken, router])

  return null
}
