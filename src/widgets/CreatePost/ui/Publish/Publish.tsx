import React from 'react'
import { toast } from 'react-toastify'

import { useCreatePostMutation } from '@/shared/api/postsApi'
import { useMeQuery } from '@/shared/api/profileApi'
import { ArrowLeftShortIcon } from '@/shared/assets'
import { MAX_DESCRIPTION_LENGTH } from '@/shared/const'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { Avatar, Button, TextField, Typography } from '@/shared/ui'
import { resetState, setDescription, setPrevStage } from '@/widgets/CreatePost/service'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import NextImage from 'next/image'

import s from './Publish.module.scss'

type PublishProps = {
  onCloseBtn: () => void
}
export const Publish = ({ onCloseBtn }: PublishProps) => {
  const { data } = useMeQuery()
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
        await createPost({ description, images: imagesIds })
        dispatch(resetState())
        onCloseBtn()
        toast.success('Post is published')
      }
    } catch (error) {
      console.error('Ошибка загрузки на сервер:', error)
      toast.error('Ошибка загрузки')
    }
  }

  return (
    <div>
      <div className={s.title}>
        <button className={s.backBtn} onClick={setPerv}>
          <ArrowLeftShortIcon />
        </button>
        <Typography as={'h1'} variant={'h1'}>
          Publication
        </Typography>
        <Button onClick={onPublishHandler} style={{ padding: 'unset' }} variant={'link'}>
          Publish
        </Button>
      </div>

      <div className={s.body}>
        <div className={s.sliderBlock}>
          <Slider sliderLength={filteredImages.length}>
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
            <Avatar size={36} src={data?.avatarUrl} userName={`${data?.username}`} />
            <Typography as={'span'}>{data?.username ?? 'URL Profile'}</Typography>
          </div>
          <TextField
            label={'Add publication description'}
            maxLength={MAX_DESCRIPTION_LENGTH}
            onValueChange={changeDescHandler}
            placeholder={"What's new?"}
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
