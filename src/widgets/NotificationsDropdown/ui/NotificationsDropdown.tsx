import { useEffect, useState } from 'react'

import { useConnectSocket } from '@/shared/api/hooks/useConnectSocket'
import { NotificationType, useLazyGetNotificationsQuery } from '@/shared/api/notificationsApi'
import { BellNotifyIcon, FilledBellNotifyIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  ScrollArea,
  Typography,
} from '@/shared/ui'
import { NotificationsList } from '@/widgets/NotificationsDropdown/ui/NotificationsList'
import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu'
import { isAfter, subMonths } from 'date-fns'

import s from './NotificationsDropdown.module.scss'

export const NotificationsDropdown = () => {
  const { text } = useTranslation()
  const t = text.layout.header.notifications

  const [isBellActive, setIsBellActive] = useState<boolean>(false)

  const { notifications: newMessage } = useConnectSocket()

  const [trigger, { data: notifications }] = useLazyGetNotificationsQuery({})

  useEffect(() => {
    trigger({}, true)
  }, [newMessage, trigger])

  const filteredNotifications = (notifications: NotificationType[]) => {
    const nowDate = new Date()
    const lastMonth = subMonths(nowDate, 1)

    return notifications.filter(notification => {
      const notifyDate = new Date(notification.notifyAt)

      return isAfter(notifyDate, lastMonth) && isAfter(nowDate, notifyDate)
    })
  }

  const currentNotifications = notifications ? filteredNotifications(notifications.items) : []

  const handleOpenNotifications = (isOpen: boolean) => setIsBellActive(isOpen)

  const notReadNotifications = currentNotifications.filter(el => !el.isRead).length

  return (
    <DropdownMenu onOpenChange={handleOpenNotifications}>
      <DropdownMenuTrigger asChild className={s.trigger}>
        <div className={s.bell}>
          {isBellActive ? (
            <FilledBellNotifyIcon />
          ) : (
            <>
              <BellNotifyIcon />
              {notReadNotifications > 1 && <div className={s.count}>{notReadNotifications}</div>}
            </>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={'end'} arrowPadding={20} className={s.content} sideOffset={10}>
        <DropdownMenuArrow asChild>
          <div className={s.arrow}></div>
        </DropdownMenuArrow>
        <DropdownMenuLabel className={s.label}>
          <Typography as={'span'} variant={'boldText14'}>
            {t.notifications}
          </Typography>
        </DropdownMenuLabel>
        <ScrollArea className={s.notificationsList}>
          {currentNotifications?.length > 0 ? (
            <NotificationsList notifications={currentNotifications} />
          ) : (
            <>
              <DropdownMenuSeparator />
              <Typography as={'span'} variant={'boldText14'}>
                {t.noNotifications}
              </Typography>
            </>
          )}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
