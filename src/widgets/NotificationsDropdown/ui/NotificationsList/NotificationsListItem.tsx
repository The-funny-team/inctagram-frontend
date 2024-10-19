import { useState } from 'react'

import { NotificationType, useMarkNotificationAsReadMutation } from '@/shared/api/notificationsApi'
import { getTimeAgo } from '@/shared/lib/helpers/getTimeAgo'
import { useTranslation } from '@/shared/lib/hooks'
import { DropdownMenuItem, DropdownMenuSeparator, Typography } from '@/shared/ui'

import s from './NotificationsList.module.scss'

type NotificationsItemProps = NotificationType

export const NotificationsListItem = ({
  id,
  isRead,
  message,
  notifyAt,
}: NotificationsItemProps) => {
  const { text } = useTranslation()
  const t = text.layout.header.notifications
  const [markAsRead] = useMarkNotificationAsReadMutation()

  const [markRead, setMarkRead] = useState(false)

  const readNotification = (id: number) => {
    markAsRead({ ids: [id] })
    setMarkRead(true)
  }

  return (
    <>
      <DropdownMenuSeparator className={s.separator} />
      <DropdownMenuItem
        className={s.item}
        onClick={() => readNotification(id)}
        onSelect={event => {
          event.preventDefault()
        }}
      >
        <div className={s.itemHeader}>
          <Typography as={'span'} variant={'boldText14'}>
            {t.newNotification}
          </Typography>
          {!isRead && !markRead && (
            <Typography as={'span'} className={s.itemNewNotification} variant={'smallText'}>
              {t.new}
            </Typography>
          )}
        </div>
        <Typography as={'span'} variant={'regularText14'}>
          {message}
        </Typography>
        <Typography as={'span'} className={s.timeAgo} variant={'smallText'}>
          {getTimeAgo(notifyAt) + ` ${text.timeIntervals.ago}`}
        </Typography>
      </DropdownMenuItem>
    </>
  )
}
