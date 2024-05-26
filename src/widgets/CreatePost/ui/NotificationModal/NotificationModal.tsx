import { useAppDispatch, useTranslation } from '@/shared/lib/hooks'
import { Button, Modal, Typography } from '@/shared/ui'
import { resetState, setDraftedPage } from '@/widgets/CreatePost/service'

import s from './NotificationModal.module.scss'

type Props = {
  closeOtherModal: (open: boolean) => void
  isOpen: boolean
  isOpenChange: (open: boolean) => void
}

export const NotificationModal = ({ closeOtherModal, isOpen, isOpenChange }: Props) => {
  const { text } = useTranslation()
  const t = text.modals.notificationModal
  const dispatch = useAppDispatch()

  const onDiscardHandler = () => {
    dispatch(resetState())
    isOpenChange(false)
    closeOtherModal(false)
  }

  const onSaveDraftHandler = () => {
    dispatch(setDraftedPage())
    isOpenChange(false)
    closeOtherModal(false)
  }

  return (
    <Modal
      className={s.notificationModal}
      isOpen={isOpen}
      onIsOpenChange={isOpenChange}
      title={'Close'}
    >
      <div className={s.body}>
        <Typography className={s.warnCaption} variant={'regularText16'}>
          {t.text}
        </Typography>
        <div className={s.btnGroup}>
          <Button onClick={onDiscardHandler} variant={'tertiary'}>
            {t.discardBtn}
          </Button>
          <Button onClick={onSaveDraftHandler}>{t.draftBtn}</Button>
        </div>
      </div>
    </Modal>
  )
}
