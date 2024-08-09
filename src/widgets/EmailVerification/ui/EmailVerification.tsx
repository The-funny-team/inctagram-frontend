import { useEffect, useState } from 'react'

import {
  useEmailConfirmationMutation,
  useEmailResendingMutation,
  useMeQuery,
} from '@/shared/api/authApi'
import { Loader } from '@/shared/ui'
import { ConfirmedEmail } from '@/widgets/ConfirmedEmail'
import { ExpiredLink } from '@/widgets/ExpiredLink'
import { currentUrl } from '@/widgets/SignUp/ui/SignUp'
import { useRouter } from 'next/router'

export const EmailVerification = () => {
  const router = useRouter()
  const { data: userInfo } = useMeQuery()
  const currentEmail = userInfo?.email || ''
  const { code } = router.query
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [confirmation, { isError, isLoading, isSuccess }] = useEmailConfirmationMutation()

  const [emailResending] = useEmailResendingMutation()

  useEffect(() => {
    if (code && typeof code === 'string') {
      confirmation(code)
    }
  }, [code, confirmation])

  const sendEmail = () => {
    if (code && typeof code === 'string') {
      emailResending({ baseUrl: currentUrl, email: currentEmail })
        .unwrap()
        .then(() => setIsOpenModal(true))
    }
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return (
      <ExpiredLink
        isOpenModal={isOpenModal}
        resendEmailHandler={sendEmail}
        setIsOpenModal={setIsOpenModal}
      />
    )
  }

  if (!isSuccess) {
    return <ConfirmedEmail />
  }

  return null
}
