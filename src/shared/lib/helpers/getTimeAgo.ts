import { useTranslation } from '@/shared/lib/hooks'

export const getTimeAgo = (time: string) => {
  const { text } = useTranslation()
  const t = text.timeIntervals

  const notifyDate = new Date(time)
  const now = new Date()
  const diffInMs = now.getTime() - notifyDate.getTime()

  const seconds = Math.floor(diffInMs / 1000)
  const minutes = Math.floor(diffInMs / (1000 * 60))
  const hours = Math.floor(diffInMs / (1000 * 60 * 60))
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  const weeks = Math.floor(days / 7)

  if (weeks > 0) {
    return `${weeks} ${t.weeks}`
  }
  if (days > 0) {
    return `${days} ${t.days}`
  }
  if (hours > 0) {
    return `${hours} ${t.hours}`
  }
  if (minutes > 0) {
    return `${minutes} ${t.minutes}`
  }

  return `${seconds} ${t.seconds}`
}
