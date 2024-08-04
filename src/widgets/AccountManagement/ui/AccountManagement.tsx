import { ChoiceSubscription } from '@/widgets/AccountManagement/ui/ChoiceSubscription/ChoiceSubscription'
import { CurrentSubscription } from '@/widgets/AccountManagement/ui/CurrentSubscription/CurrentSubscription'

import s from './AccountManagement.module.scss'

export const AccountManagement = () => {
  const isCurrentSubscriptions = true // request current subscriptions

  //

  return (
    <main className={s.root}>
      {isCurrentSubscriptions && <CurrentSubscription />}
      <ChoiceSubscription />
    </main>
  )
}
