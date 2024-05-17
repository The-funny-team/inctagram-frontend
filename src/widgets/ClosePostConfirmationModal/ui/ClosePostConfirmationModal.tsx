import { ComponentPropsWithoutRef } from 'react'

import { Button, ModalRadix, Typography } from '@/shared/ui'

import styles from './ClosePostConfirmationModal.module.scss'

type Props = {
  onCancelChanges: () => void
  onOpenChange: () => void
} & Omit<ComponentPropsWithoutRef<typeof ModalRadix>, 'onOpenChange'>

export const ClosePostConfirmationModal = ({ onCancelChanges, onOpenChange, ...rest }: Props) => {
  return (
    <ModalRadix {...rest} className={styles.modal} onOpenChange={onOpenChange} title={'Close Post'}>
      <div className={styles.content}>
        <Typography as={'span'} variant={'regularText16'}>
          Do you really want to close the edition of the publication? If you close changes won’t be
          saved
        </Typography>
        <div className={styles.buttons}>
          <Button onClick={onCancelChanges} variant={'tertiary'}>
            Yes
          </Button>
          <Button onClick={onOpenChange}>No</Button>
        </div>
      </div>
    </ModalRadix>
  )
}
