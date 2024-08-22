import { Fragment } from 'react'

import { getTimeAgo } from '@/shared/lib/helpers/getTimeAgo'
import { useTranslation } from '@/shared/lib/hooks'
import { DropdownMenuItem, DropdownMenuSeparator, Typography } from '@/shared/ui'

import s from './NotificationsList.module.scss'

import { Notification } from '../NotificationsDropdown'

type NotificationsListProps = {
  notifications: Notification[]
}

export const NotificationsList = ({ notifications }: NotificationsListProps) => {
  const { text } = useTranslation()
  const t = text.layout.header.notifications

  const notificationsList = notifications.map(notification => (
    <Fragment key={notification.id}>
      <DropdownMenuSeparator className={s.separator} />
      <DropdownMenuItem className={s.item}>
        <div className={s.itemHeader}>
          <Typography as={'span'} variant={'boldText14'}>
            {t.newNotification}
          </Typography>
          {!notification.isRead && (
            <Typography as={'span'} className={s.itemNewNotification} variant={'smallText'}>
              {t.new}
            </Typography>
          )}
        </div>
        <Typography as={'span'} variant={'regularText14'}>
          {notification.message}
        </Typography>
        <Typography as={'span'} className={s.timeAgo} variant={'smallText'}>
          {getTimeAgo(notification.notifyAt) + `${text.timeIntervals.ago}`}
        </Typography>
      </DropdownMenuItem>
    </Fragment>
  ))

  return <>{notificationsList}</>
}
