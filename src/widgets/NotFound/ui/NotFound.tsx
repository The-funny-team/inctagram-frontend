import { useTranslation } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'

import s from './NotFound.module.scss'

export const NotFound = () => {
  const { text } = useTranslation()
  const t = text.pages.notFound

  return (
    <main className={s.wrapper}>
      <Image alt={'not-found'} height={192} src={'/notFound.png'} width={451} />
      <div>
        <Typography className={s.title} variant={'regularText16'}>
          {t.title}
        </Typography>
      </div>
      <Button as={Link} fullWidth={false} href={'/'}>
        {t.captionBtn}
      </Button>
    </main>
  )
}
