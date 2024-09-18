import { useEffect, useState } from 'react'

import { useCheckRecoveryCodeMutation } from '@/shared/api/authApi'
import { ROUTES_URL } from '@/shared/const'
import { Loader } from '@/shared/ui'
import { CreateNewPassword } from '@/widgets/CreateNewPassword'
import { ExpiredLink } from '@/widgets/ExpiredLink'
import { useRouter } from 'next/router'

import s from './Recovery.module.scss'

export const Recovery = () => {
  const [checkRecoveryCode, { isError, isLoading, isSuccess }] = useCheckRecoveryCodeMutation()

  const [isOpenModal, setIsOpenModal] = useState(false)

  const router = useRouter()
  const code = router.query.code as string

  useEffect(() => {
    code && checkRecoveryCode({ recoveryCode: code })
  }, [code, checkRecoveryCode])

  const sendEmail = () => {
    router.push(ROUTES_URL.FORGOT_PASSWORD)
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
  if (isSuccess) {
    return (
      <main className={s.recoveryRoot}>
        <CreateNewPassword code={code} />
      </main>
    )
  }

  return null
}
