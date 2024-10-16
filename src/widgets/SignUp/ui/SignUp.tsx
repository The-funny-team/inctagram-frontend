import { useState } from 'react'
import { Controller } from 'react-hook-form'

import { useSignUpMutation } from '@/shared/api/authApi'
import { GithubIcon, GoogleIcon } from '@/shared/assets'
import { BASE_LOCAL_URL, BASE_URL, GOOGLE_URL, ROUTES_URL } from '@/shared/const'
import { Button, Card, Checkbox, Input, Modal, Trans, Typography } from '@/shared/ui'
import { SignUpSchemaType, useSignUp } from '@/widgets/SignUp/services'
import { clsx } from 'clsx'
import Link from 'next/link'
import { onRequestErrorHandler } from 'src/shared/lib/helpers'

import s from './SignUp.module.scss'

export const currentUrl = process.env.NODE_ENV === 'development' ? BASE_LOCAL_URL : BASE_URL

export const SignUp = () => {
  const [signUp] = useSignUpMutation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { control, getValues, handleSubmit, isDisabled, reset, setError, text } = useSignUp()

  const classNames = {
    form: clsx(s.form),
    formCheckbox: clsx(s.formCheckbox),
    formInput(error?: string) {
      return clsx(s.formInput, error && s.formInputWithError)
    },
    modalCloseBtn: s.modalCloseBtn,
    modalDescription: s.modalDescription,
    modalSignUp: s.modalSignUp,
    otherRegistration: clsx(s.otherRegistration),
    question: clsx(s.question),
    root: clsx(s.root),
    title: clsx(s.title),
  }
  const submitHandler = async (data: SignUpSchemaType) => {
    try {
      await signUp({
        baseUrl: currentUrl,
        email: data.email,
        password: data.password,
        userName: data.userName,
      }).unwrap()
      setIsOpen(true)
    } catch (e: unknown) {
      onRequestErrorHandler(e, setError)
    }
  }
  const modalCloseHandler = () => {
    setIsOpen(false)
    reset()
  }

  const loginByGoogle = () => {
    window.location.assign(GOOGLE_URL)
  }

  return (
    <Card className={classNames.root}>
      <Typography as={'h1'} className={classNames.title} variant={'h1'}>
        {text.pages.signUp.formTitle}
      </Typography>{' '}
      <div className={classNames.otherRegistration}>
        <button onClick={loginByGoogle}>
          <GoogleIcon />
        </button>
        <Link href={'https://github.com/login/oauth/authorize'} target={'_blank'}>
          <GithubIcon />
        </Link>
      </div>
      <form className={classNames.form} onSubmit={handleSubmit(submitHandler)}>
        <Controller
          control={control}
          name={'userName'}
          render={({ field, fieldState: { error } }) => (
            <Input
              className={classNames.formInput(error?.message)}
              error={error && error.message}
              label={text.pages.signUp.username}
              type={'text'}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={'email'}
          render={({ field, fieldState: { error } }) => (
            <Input
              className={classNames.formInput(error?.message)}
              error={error && error.message}
              label={text.pages.signUp.email}
              type={'text'}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={'password'}
          render={({ field, fieldState: { error } }) => (
            <Input
              className={classNames.formInput(error?.message)}
              error={error && error.message}
              label={text.pages.signUp.password}
              type={'password'}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={'passwordConfirm'}
          render={({ field, fieldState: { error } }) => (
            <Input
              className={classNames.formInput(error?.message)}
              error={error && error.message}
              label={text.pages.signUp.confirmPassword}
              type={'password'}
              {...field}
            />
          )}
        />

        <div className={classNames.formCheckbox}>
          <Controller
            control={control}
            name={'agree'}
            render={({ field }) => (
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            )}
          />

          <Typography as={'span'} variant={'smallText'}>
            <Trans
              tags={{
                1: () => (
                  <Typography as={Link} href={ROUTES_URL.TERMS_OF_SERVICE} variant={'smallLink'}>
                    {text.pages.signUp.agreement.terms}
                  </Typography>
                ),
                2: () => (
                  <Typography as={Link} href={ROUTES_URL.PRIVACY_POLICY} variant={'smallLink'}>
                    {text.pages.signUp.agreement.privacy}
                  </Typography>
                ),
              }}
              text={text.pages.signUp.agreement.description}
            />
          </Typography>
        </div>
        <Button disabled={isDisabled} type={'submit'}>
          {text.pages.signUp.signUpBtn}
        </Button>
      </form>
      <Typography className={classNames.question} variant={'regularText16'}>
        {text.pages.signUp.questionAboutAccount}
      </Typography>
      <Button as={Link} href={ROUTES_URL.SIGN_IN} variant={'link'}>
        {text.pages.signUp.signUpLink}
      </Button>
      <Modal
        className={classNames.modalSignUp}
        isOpen={isOpen}
        onIsOpenChange={modalCloseHandler}
        title={text.pages.signUp.modal.title}
      >
        <Typography className={classNames.modalDescription} variant={'regularText16'}>
          {text.pages.signUp.modal.getDescription(getValues('email'))}
        </Typography>

        <Button className={classNames.modalCloseBtn} fullWidth={false} onClick={modalCloseHandler}>
          OK
        </Button>
      </Modal>
    </Card>
  )
}
