import { ChangeEvent } from 'react'

import { Cross2Icon } from '@/shared/assets'
import { useAppDispatch, useTranslation } from '@/shared/lib/hooks'
import { BlankCover, Button, Typography } from '@/shared/ui'
import {
  resetState,
  setNextStage,
  setPictures,
  setStageFromDraft,
  uploadPhotos,
} from '@/widgets/CreatePost/service'

import s from './ImageSelection.module.scss'

type ImageSelectionProps = {
  onCloseBtn: () => void
}

export const ImageSelection = ({ onCloseBtn }: ImageSelectionProps) => {
  const { text } = useTranslation()
  const t = text.modals.createPostModal.selectImage
  const dispatch = useAppDispatch()
  const setNext = () => dispatch(setNextStage())
  const setPhotos = (pictures: string[]) => dispatch(setPictures({ pictures }))

  const changePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const readyForSetFiles = uploadPhotos(e)

    if (readyForSetFiles.length > 0) {
      dispatch(resetState())
      setPhotos(readyForSetFiles)
      setNext()
    }
  }

  const openDraftHandler = () => {
    dispatch(setStageFromDraft())
  }

  return (
    <>
      <div className={s.title}>
        <Typography as={'h1'} variant={'h1'}>
          {t.title}
        </Typography>
        <button className={s.closeBtn} onClick={onCloseBtn}>
          <Cross2Icon />
        </button>
      </div>

      <div className={s.body}>
        <BlankCover type={'square'} />
        <div className={s.btnGroup}>
          <label htmlFor={'pick-image-for-post'}>
            <input
              accept={'image/*'}
              id={'pick-image-for-post'}
              multiple
              onChange={changePhotoHandler}
              style={{ display: 'none' }}
              type={'file'}
            />
            <Button as={'span'}>{t.selectPhoto}</Button>
          </label>

          <Button onClick={openDraftHandler} variant={'tertiary'}>
            {t.openDraft}
          </Button>
        </div>
      </div>
    </>
  )
}
