import React from 'react'
import { toast } from 'react-toastify'

import { useLogoutMutation, useMeQuery } from '@/shared/api/authApi'
import { isFetchBaseQueryError } from '@/shared/lib/helpers'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Modal, Typography } from '@/shared/ui'

import s from './LogOutModal.module.scss'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
export const LogOutModal = ({ isOpen, setIsOpen }: Props) => {
  const { text } = useTranslation()
  const { data } = useMeQuery()
  const userEmail = data ? data.email : ''

  const t = text.modals.logOutModal
  const [logout] = useLogoutMutation()
  const logoutHandler = async () => {
    try {
      await logout().unwrap()
    } catch (e) {
      if (isFetchBaseQueryError(e)) {
        if (!Array.isArray(e.data.messages[0].message)) {
          toast.error(e.data.messages[0].message)
        }
      } else {
        toast.error(JSON.stringify(e))
      }
    }
  }

  return (
    <Modal
      className={s.logOutModalRoot}
      isOpen={isOpen}
      onIsOpenChange={setIsOpen}
      title={t.header}
    >
      <div className={s.logOutRoot}>
        <Typography variant={'regularText16'}>{t.getBody(userEmail)}</Typography>
        <div className={s.buttonsBlock}>
          <Button fullWidth={false} onClick={logoutHandler} variant={'tertiary'}>
            {t.yesBtn}
          </Button>
          <Button
            fullWidth={false}
            onClick={() => {
              setIsOpen(false)
            }}
            variant={'primary'}
          >
            {t.noBtn}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
