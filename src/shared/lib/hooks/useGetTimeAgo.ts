import { useEffect, useState } from 'react'

import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import { useRouter } from 'next/router'

export const useGetTimeAgo = (updatedAt: string) => {
  const { locale } = useRouter()
  const [timeAgo, setTimeAgo] = useState<null | string>(null)

  useEffect(() => {
    setTimeAgo(
      formatDistanceToNowStrict(parseISO(updatedAt), {
        addSuffix: true,
        locale: locale === 'ru' ? ru : enUS,
      })
    )
  }, [locale, updatedAt])

  return timeAgo
}
