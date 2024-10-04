import React from 'react'
import { toast } from 'react-toastify'

import { useCreatePostMutation } from '@/shared/api/postsApi'
import { useGetProfileInfoQuery } from '@/shared/api/profileApi'
import { ArrowLeftShortIcon } from '@/shared/assets'
import { MAX_DESCRIPTION_LENGTH } from '@/shared/const'
import { isFetchBaseQueryError } from '@/shared/lib/helpers'
import { useAppDispatch, useAppSelector, useTranslation } from '@/shared/lib/hooks'
import { Avatar, Button, TextField, Typography } from '@/shared/ui'
import { resetState, setDescription, setPrevStage } from '@/widgets/CreatePost/service'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import NextImage from 'next/image'

import s from './Publish.module.scss'

type PublishProps = {
  onCloseBtn: () => void
}
export const Publish = ({ onCloseBtn }: PublishProps) => {
  const { text } = useTranslation()
  const t = text.modals.createPostModal
  const { data } = useGetProfileInfoQuery()
  const filteredImages = useAppSelector(state => state.createPostSlice.filteredPictures)
  const description = useAppSelector(state => state.createPostSlice.description)
  const dispatch = useAppDispatch()
  const [createPost] = useCreatePostMutation()
  const imagesIds = useAppSelector(state => state.createPostSlice.picturesIds)
  const setPerv = () => {
    dispatch(setPrevStage())
  }

  const changeDescHandler = (value: string) => {
    dispatch(setDescription({ desc: value }))
  }

  const onPublishHandler = async () => {
    try {
      if (imagesIds.length) {
        await createPost({ childrenMetadata: imagesIds, description })
        dispatch(resetState())
        onCloseBtn()

        toast.success('Post is published')
      }
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        if (!Array.isArray(error.data.messages[0].message)) {
          toast.error(error.data.messages[0].message)
        }
      }
    }
  }

  return (
    <div>
      <div className={s.title}>
        <button className={s.backBtn} onClick={setPerv}>
          <ArrowLeftShortIcon />
        </button>
        <Typography as={'h1'} variant={'h1'}>
          {t.public}
        </Typography>
        <Button
          disabled={!imagesIds.length}
          onClick={onPublishHandler}
          style={{ padding: 'unset' }}
          variant={'link'}
        >
          {t.publicBtn}
        </Button>
      </div>

      <div className={s.body}>
        <div className={s.sliderBlock}>
          <Slider
            isDots={filteredImages.length > 1}
            sizeBtn={36}
            sliderLength={filteredImages.length}
          >
            {filteredImages.map(pic => (
              <div key={pic.id}>
                <NextImage
                  alt={'post image with filter'}
                  height={499}
                  src={pic.img}
                  style={{ objectFit: 'contain' }}
                  width={489}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className={s.publishBlock}>
          <div className={s.userInfo}>
            <Avatar size={36} src={data?.avatars[0]?.url} userName={`${data?.userName}`} />
            <Typography as={'span'}>{data?.userName ?? 'URL Profile'}</Typography>
          </div>
          <TextField
            label={t.description.label}
            maxLength={MAX_DESCRIPTION_LENGTH}
            onValueChange={changeDescHandler}
            placeholder={t.description.placeholder}
            value={description}
          />
          <Typography as={'div'} className={s.counter} variant={'smallText'}>
            {`${description.length}/${MAX_DESCRIPTION_LENGTH}`}
          </Typography>
        </div>
      </div>
    </div>
  )
}
