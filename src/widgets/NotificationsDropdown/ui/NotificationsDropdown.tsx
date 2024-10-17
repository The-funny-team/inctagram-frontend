import { useState } from 'react'

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
import { NotificationsList } from '@/widgets/NotificationsDropdown/ui/NotificationsList/NotificationsList'
import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu'

import s from '@/widgets/NotificationsDropdown/ui/NotificationsDropdown.module.scss'

export type Notification = {
  id: number
  isRead: boolean
  message: string
  notifyAt: string
}

type NotificationsDropdownProps = {
  notifications: Notification[]
}

export const NotificationsDropdown = ({ notifications }: NotificationsDropdownProps) => {
  const { text } = useTranslation()
  const t = text.layout.header.notifications

  const [isBellActive, setIsBellActive] = useState<boolean>(false)

  const handleOpenNotifications = (isOpen: boolean) => setIsBellActive(isOpen)

  return (
    <DropdownMenu onOpenChange={handleOpenNotifications}>
      <DropdownMenuTrigger asChild className={s.trigger}>
        {isBellActive ? <FilledBellNotifyIcon /> : <BellNotifyIcon />}
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
          {notifications?.length > 0 ? (
            <NotificationsList notifications={notifications} />
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
