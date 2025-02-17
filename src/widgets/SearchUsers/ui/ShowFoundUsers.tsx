import { GetUsersResponseItems } from '@/shared/api/followApi'
import { ShowUser } from '@/widgets/SearchUsers/ui/ShowUser/ShowUser'

type Props = { users: GetUsersResponseItems[] }
export const ShowFoundUsers = ({ users }: Props) => {
  return (
    <div>
      {users.map(user => (
        <ShowUser key={user.id} user={user} />
      ))}
    </div>
  )
}
