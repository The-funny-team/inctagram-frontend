import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { useLoginByGitHubQuery } from '@/shared/api/authApi'
import { ACCESS_TOKEN, ROUTES_URL } from '@/shared/const'
import { saveToLocalStorage } from '@/shared/lib/helpers'
import { Loader } from '@/shared/ui'
import { useRouter } from 'next/router'

export const GitHubAuth = () => {
  const router = useRouter()
  const { code } = router.query as { code: string }

  const { data, error, isLoading } = useLoginByGitHubQuery()

  useEffect(() => {
    if (data?.accessToken) {
      saveToLocalStorage(ACCESS_TOKEN, data.accessToken)
      router.push('/')
    }
  }, [data?.accessToken, router])

  if (error) {
    toast.error('Authentication Error. Please try again later.')
    router.push(ROUTES_URL.SIGN_IN)
  }

  if (isLoading) {
    return <Loader />
  }

  return null
}
