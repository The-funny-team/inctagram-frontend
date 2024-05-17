import { ComponentPropsWithoutRef } from 'react'

import { Button, ModalRadix, Typography } from '@/shared/ui'

import styles from './DeletePostConfirmationModal.module.scss'

type Props = {
  onDeletePost: () => void
  onOpenChange: () => void
} & Omit<ComponentPropsWithoutRef<typeof ModalRadix>, 'onOpenChange'>

export const DeletePostConfirmationModal = ({ onDeletePost, onOpenChange, ...rest }: Props) => {
  return (
    <ModalRadix
      title={'Delete Post'}
      {...rest}
      className={styles.modal}
      onOpenChange={onOpenChange}
    >
      <div className={styles.content}>
        <Typography as={'span'} variant={'regularText16'}>
          Are you sure you want to delete this post?
        </Typography>
        <div className={styles.buttons}>
          <Button onClick={onDeletePost} variant={'tertiary'}>
            Yes
          </Button>
          <Button onClick={onOpenChange}>No</Button>
        </div>
      </div>
    </ModalRadix>
  )
}
