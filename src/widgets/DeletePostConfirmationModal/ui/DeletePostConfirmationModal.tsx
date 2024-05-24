import { ComponentPropsWithoutRef } from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { Button, ModalRadix, Typography } from '@/shared/ui'

import styles from './DeletePostConfirmationModal.module.scss'

type Props = {
  onDeletePost: () => void
  onOpenChange: () => void
} & Omit<ComponentPropsWithoutRef<typeof ModalRadix>, 'onOpenChange'>

export const DeletePostConfirmationModal = ({ onDeletePost, onOpenChange, ...rest }: Props) => {
  const { text } = useTranslation()
  const t = text.modals.deletePostConfirmationModal

  return (
    <ModalRadix title={t.header} {...rest} className={styles.modal} onOpenChange={onOpenChange}>
      <div className={styles.content}>
        <Typography as={'span'} variant={'regularText16'}>
          {t.confirmQuestion}
        </Typography>
        <div className={styles.buttons}>
          <Button onClick={onDeletePost} variant={'tertiary'}>
            {t.yesBtn}
          </Button>
          <Button onClick={onOpenChange}>{t.noBtn}</Button>
        </div>
      </div>
    </ModalRadix>
  )
}
