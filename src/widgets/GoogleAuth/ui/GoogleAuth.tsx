import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { useLoginByGoogleMutation } from '@/shared/api/authApi'
import { ACCESS_TOKEN, ROUTES_URL } from '@/shared/const'
import { saveToLocalStorage } from '@/shared/lib/helpers'
import { Loader } from '@/shared/ui'
import { useRouter } from 'next/router'

type Props = {
  code: string
}

export const GoogleAuth = ({ code }: Props) => {
  const router = useRouter()

  const [loginByGoogle, { isLoading }] = useLoginByGoogleMutation()

  useEffect(() => {
    loginByGoogle({ code })
      .unwrap()
      .then(data => {
        saveToLocalStorage(ACCESS_TOKEN, data.accessToken)
        router.push('/')
      })
      .catch(error => {
        toast.error(error.data.messages[0].message)
        router.push(ROUTES_URL.SIGN_IN)
      })
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return null
}
