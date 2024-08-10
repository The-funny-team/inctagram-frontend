import ReCAPTCHA from 'react-google-recaptcha'
import { Controller } from 'react-hook-form'

import { usePasswordRecoveryMutation } from '@/shared/api/authApi'
import { ROUTES_URL } from '@/shared/const'
import { onRequestErrorHandler } from '@/shared/lib/helpers'
import { Button, Card, Input, Modal, Typography } from '@/shared/ui'
import { ForgotPasswordFormValues, useForgotPassword } from '@/widgets/ForgotPassword/services'
import { currentUrl } from '@/widgets/SignUp/ui/SignUp'
import Link from 'next/link'

import s from './ForgotPassword.module.scss'

export const ForgotPassword = () => {
  const [emailSending, { isSuccess }] = usePasswordRecoveryMutation()
  const {
    captcha,
    control,
    getValues,
    handleSubmit,
    isDisabled,
    isOpenModal,
    setCaptcha,
    setError,
    setIsOpenModal,
    transcription,
  } = useForgotPassword()

  const submitHandler = (data: ForgotPasswordFormValues) => {
    emailSending({ baseUrl: currentUrl, email: data.email, recaptcha: captcha || '' })
      .unwrap()
      .then(() => {
        setIsOpenModal(true)
      })
      .catch(error => {
        onRequestErrorHandler(error, setError)
      })
  }

  return (
    <Card className={s.card}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        {transcription.title}
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Controller
          control={control}
          name={'email'}
          render={({ field, fieldState: { error } }) => (
            <Input
              label={transcription.inputLabel}
              placeholder={'Example@mail.com'}
              type={'text'}
              {...field}
              error={error?.message}
            />
          )}
        />
        <Typography className={s.caption} variant={'regularText14'}>
          {transcription.caption}
        </Typography>
        {isSuccess && (
          <Typography className={s.captionAfterSubmit} variant={'regularText14'}>
            {transcription.captionAfterSubmit}
          </Typography>
        )}
        <Button className={s.sendLink} disabled={isDisabled} fullWidth type={'submit'}>
          {isSuccess ? transcription.resendLink : transcription.sendLinkBtn}
        </Button>
      </form>
      <Button as={Link} className={s.link} fullWidth href={ROUTES_URL.SIGN_IN} variant={'link'}>
        {transcription.signInBtn}
      </Button>
      {!isSuccess && (
        <div className={s.recaptcha}>
          <ReCAPTCHA
            onChange={setCaptcha}
            sitekey={'6LeY2y0mAAAAANwI_paCWfoksCgBm1n2z9J0nwNQ'}
            theme={'dark'}
          />
        </div>
      )}
      <Modal
        className={s.emailSentModal}
        isOpen={isOpenModal}
        onIsOpenChange={setIsOpenModal}
        title={transcription.modal.title}
      >
        <Typography className={s.modalTextGroup} variant={'regularText16'}>
          {transcription.modal.getBody(getValues('email'))}
        </Typography>
        <div className={s.modalBtnGroup}>
          <Button onClick={() => setIsOpenModal(false)}>OK</Button>
        </div>
      </Modal>
    </Card>
  )
}
