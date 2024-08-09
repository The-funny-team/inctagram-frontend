import s from './AccountManagement.module.scss'

import { ChoiceSubscription } from './ChoiceSubscription'
import { CurrentSubscription } from './CurrentSubscription'

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
