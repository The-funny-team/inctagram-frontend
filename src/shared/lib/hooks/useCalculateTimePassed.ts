import { useTranslation } from '@/shared/lib/hooks/useTranslation'

export const useCalculateUpdatedInterval = (date: string) => {
  const { text } = useTranslation()
  const t = text.timeIntervals

  const timeDifference = Date.now() - new Date(date).getTime()

  const secondsPassed = Math.floor(timeDifference / 1000)
  const minutesPassed = Math.floor(secondsPassed / 60)
  const hoursPassed = Math.floor(minutesPassed / 60)
  const daysPassed = Math.floor(hoursPassed / 24)
  const weeksPassed = Math.floor(daysPassed / 7)

  let timePassedFromUpdate: string

  switch (true) {
    case weeksPassed >= 1:
      timePassedFromUpdate = `${weeksPassed} ${t.weeks}`

      break
    case daysPassed >= 1:
      timePassedFromUpdate = `${daysPassed} ${t.days}`

      break
    case hoursPassed >= 1:
      timePassedFromUpdate = `${hoursPassed} ${t.hours}`

      break
    case minutesPassed >= 1:
      timePassedFromUpdate = `${minutesPassed} ${t.minutes}`

      break
    default:
      if (secondsPassed < 1) {
        timePassedFromUpdate = `1 ${t.seconds}`
        break
      } else {
        timePassedFromUpdate = `${secondsPassed} ${t.seconds}`
      }
  }

  return timePassedFromUpdate
}
