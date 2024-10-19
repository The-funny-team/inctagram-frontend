import { NotificationType } from '@/shared/api/notificationsApi'
import { NotificationsListItem } from '@/widgets/NotificationsDropdown/ui/NotificationsList/NotificationsListItem'

type NotificationsListProps = {
  notifications: NotificationType[]
}

export const NotificationsList = ({ notifications }: NotificationsListProps) => {
  return (
    <>
      {notifications.map(notification => (
        <NotificationsListItem
          id={notification.id}
          isRead={notification.isRead}
          key={notification.id}
          message={notification.message}
          notifyAt={notification.notifyAt}
        />
      ))}
    </>
  )
}
