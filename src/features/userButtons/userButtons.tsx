import { useState } from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { Button } from '@/shared/ui'

import s from './userButtons.module.scss'

export const UserButtons = () => {
  const { text } = useTranslation()
  const t = text.pages.profile.main
  const [isFollow, setIsFollow] = useState(true)
  const sendMessage = () => {}

  return (
    <div className={s.rootButtons}>
      {isFollow ? (
        <Button onClick={() => setIsFollow(prev => !prev)} variant={'primary'}>
          {t.follow}
        </Button>
      ) : (
        <Button onClick={() => setIsFollow(prev => !prev)} variant={'tertiary'}>
          {t.unFollow}
        </Button>
      )}
      <Button onClick={sendMessage} variant={'secondary'}>
        {t.sendMessage}
      </Button>
    </div>
  )
}
