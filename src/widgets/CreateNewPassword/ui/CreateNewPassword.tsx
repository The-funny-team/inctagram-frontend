import React from 'react'
import { Controller, SubmitHandler } from 'react-hook-form'

import { useCreateNewPasswordMutation } from '@/shared/api/authApi'
import { ROUTES_URL } from '@/shared/const'
import { isFetchBaseQueryError, onRequestErrorHandler } from '@/shared/lib/helpers'
import { Button, Card, Input, Typography } from '@/shared/ui'
import {
  CreateNewPasswordSchemaType,
  useCreateNewPassword,
} from '@/widgets/CreateNewPassword/service'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import styles from './CreateNewPassword.module.scss'

type Props = {
  code: string
}

export const CreateNewPassword = ({ code }: Props) => {
  const { control, handleSubmit, isDisabled, setError, text } = useCreateNewPassword()

  const router = useRouter()

  const [creatNewPassword] = useCreateNewPasswordMutation()
  const createNewPasswordHandler: SubmitHandler<CreateNewPasswordSchemaType> = data => {
    creatNewPassword({
      newPassword: data.password,
      recoveryCode: code,
    })
      .unwrap()
      .then(() => router.push(ROUTES_URL.SIGN_IN))
      .catch(error => {
        if (isFetchBaseQueryError(error)) {
          if (Array.isArray(error.data.messages)) {
            const el = error.data.messages.find(el => el.field === 'recoveryCode')

            if (!el) {
              onRequestErrorHandler(error, setError)
            }
          }
        }
      })
  }

  return (
    <Card className={clsx(styles.createNewPassword)}>
      <Typography as={'h1'} className={styles.title} variant={'h1'}>
        {text.title}
      </Typography>
      <form
        className={styles.createNewPasswordForm}
        onSubmit={handleSubmit(createNewPasswordHandler)}
      >
        <Controller
          control={control}
          name={'password'}
          render={({ field, fieldState: { error } }) => (
            <Input
              type={'password'}
              {...field}
              error={error?.message}
              label={text.newPasswordLabel}
            />
          )}
        />
        <Controller
          control={control}
          name={'passwordConfirmation'}
          render={({ field, fieldState: { error } }) => (
            <Input
              type={'password'}
              {...field}
              error={error?.message}
              label={text.newPasswordLabelConfirmation}
            />
          )}
        />
        <Typography className={styles.prompt} variant={'regularText14'}>
          {text.prompt}
        </Typography>
        <Button disabled={isDisabled} type={'submit'}>
          {text.createNewPasswordBtn}
        </Button>
      </form>
    </Card>
  )
}
