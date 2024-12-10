import { PASSWORD_PATTERN } from '@/shared/const'
import { LocaleType } from '@locales/en'
import { z } from 'zod'

export const addCommentSchema = (t: LocaleType['validation']) => {
  return z.object({
    text: z.string().min(1, t.minLength1).max(300, t.maxLength300).trim(),
  })
}

export type AddCommentType = z.infer<ReturnType<typeof addCommentSchema>>
