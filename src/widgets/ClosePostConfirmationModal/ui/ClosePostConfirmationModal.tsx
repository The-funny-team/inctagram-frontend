import { ComponentPropsWithoutRef } from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { Button, ModalRadix, Typography } from '@/shared/ui'

import styles from './ClosePostConfirmationModal.module.scss'

type Props = {
  onCancelChanges: () => void
  onOpenChange: () => void
} & Omit<ComponentPropsWithoutRef<typeof ModalRadix>, 'onOpenChange'>

export const ClosePostConfirmationModal = ({ onCancelChanges, onOpenChange, ...rest }: Props) => {
  const { text } = useTranslation()
  const t = text.modals.closePostConfirmationModal

  return (
    <ModalRadix {...rest} className={styles.modal} onOpenChange={onOpenChange} title={t.header}>
      <div className={styles.content}>
        <Typography as={'span'} variant={'regularText16'}>
          {t.confirmQuestion}
        </Typography>
        <div className={styles.buttons}>
          <Button onClick={onCancelChanges} variant={'tertiary'}>
            {t.yesBtn}
          </Button>
          <Button onClick={onOpenChange}>{t.noBtn}</Button>
        </div>
      </div>
    </ModalRadix>
  )
}
