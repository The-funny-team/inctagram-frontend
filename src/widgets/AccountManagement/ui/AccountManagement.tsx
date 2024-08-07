import { ChoiceSubscription, CurrentSubscription } from '@/widgets/AccountManagement'

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
