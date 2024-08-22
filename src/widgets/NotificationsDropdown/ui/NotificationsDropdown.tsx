import { BellNotifyIcon } from '@/shared/assets'
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={s.trigger}>
        <BellNotifyIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={s.content}>
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
