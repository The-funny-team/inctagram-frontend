import React from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { Avatar, Button, TextField, Typography } from '@/shared/ui'
import Link from 'next/link'

import styles from './EditContainer.module.scss'

type Props = {
  avatar: string
  description: string
  onChangeDescription: (value: string) => void
  onSaveChanges: () => void
  postDescription: string
  userName: string
}

export const EditContainer = ({
  avatar,
  description,
  onChangeDescription,
  onSaveChanges,
  postDescription,
  userName,
}: Props) => {
  const { text } = useTranslation()
  const t = text.modals.viewPostModal

  return (
    <div className={styles.editContainer}>
      <div>
        <Link className={styles.postAuthorName} href={'/'}>
          <Avatar size={36} src={avatar} userName={userName} />
          <Typography as={'h3'} variant={'h3'}>
            {userName}
          </Typography>
        </Link>
        <TextField
          className={styles.editInput}
          label={t.editDescriptionLabel}
          onValueChange={onChangeDescription}
          value={postDescription}
        />
        <Typography
          as={'div'}
          className={styles.editCounter}
          variant={'smallText'}
        >{`${postDescription.length}/500`}</Typography>
      </div>
      <Button
        className={styles.saveChangesBtn}
        disabled={postDescription === description}
        onClick={onSaveChanges}
      >
        {t.saveChangesBtn}
      </Button>
    </div>
  )
}
