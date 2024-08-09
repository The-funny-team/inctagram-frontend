import { useState } from 'react'
import { toast } from 'react-toastify'

import { usePasswordRecoveryResendingMutation } from '@/shared/api/authApi'
import { CreateNewPassword } from '@/widgets/CreateNewPassword'
import { ExpiredLink } from '@/widgets/ExpiredLink'
import { useRouter } from 'next/router'

import s from './Recovery.module.scss'

export const Recovery = () => {
  const [recoveryError, setRecoveryError] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [passwordRecoveryResending] = usePasswordRecoveryResendingMutation()
  const router = useRouter()
  const code = router.query.code as string

  const sendEmail = () => {
    passwordRecoveryResending({ code })
      .unwrap()
      .then(() => setIsOpenModal(true))
      .catch(err => toast.error(JSON.stringify(err)))
  }

  return (
    <main className={s.recoveryRoot}>
      {!recoveryError ? (
        <CreateNewPassword code={code} setRecoveryErrorHandler={setRecoveryError} />
      ) : (
        <ExpiredLink
          isOpenModal={isOpenModal}
          resendEmailHandler={sendEmail}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </main>
  )
}
