import { useTranslation } from '@/shared/lib/hooks'
import { LinkTo, Typography } from '@/shared/ui'

import s from '@/widgets/PrivacyPolicy/ui/PrivacyPolicy.module.scss'

export const PrivacyPolicy = () => {
  const {
    text: {
      pages: { privacyPolicy },
    },
  } = useTranslation()

  return (
    <main className={s.root}>
      <LinkTo>{privacyPolicy.backToBtn}</LinkTo>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        {privacyPolicy.title}
      </Typography>
      <Typography className={s.desc} variant={'regularText14'}>
        {privacyPolicy.description}
      </Typography>
    </main>
  )
}
