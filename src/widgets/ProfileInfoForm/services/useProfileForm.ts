import { useForm } from 'react-hook-form'

import {
  ABOUT_ME_PATTERN,
  SECONDS_PER_YEAR,
  USER_FIRST_LAST_NAME_PATTERN,
  USERNAME_PATTERN,
} from '@/shared/const'
import { zodResolver } from '@hookform/resolvers/zod'
import { LocaleType } from '@locales/en'
import { z } from 'zod'

const MIN_USER_AGE: number = 13

type ErrorsTextProps = LocaleType['pages']['profile']['profileInfoFormErrors']
const userProfileSchema = (t: ErrorsTextProps) =>
  z
    .object({
      aboutMe: z
        .string()
        .trim()
        .max(200, t.maxAboutMeLength)
        .regex(ABOUT_ME_PATTERN, t.aboutMeRegex)
        .optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      dateOfBirth: z.date().nullable(),
      firstName: z
        .string()
        .trim()
        .min(1, t.minFirstNameLength)
        .max(50, t.maxFirstNameLength)
        .regex(USER_FIRST_LAST_NAME_PATTERN, t.firstNameRegex),
      lastName: z
        .string()
        .trim()
        .min(1, t.minLastNameLength)
        .max(50, t.maxLastNameLength)
        .regex(USER_FIRST_LAST_NAME_PATTERN, t.lastNameRegex),
      userName: z
        .string()
        .trim()
        .min(6, t.minUserNameLength)
        .max(30, t.maxUserNameLength)
        .regex(USERNAME_PATTERN, t.userNameRegex),
    })
    .refine(
      data => {
        const dateOfBirth = data.dateOfBirth

        if (dateOfBirth) {
          const currentDay: Date = new Date()
          const differenceInYears: number =
            (currentDay.getTime() - dateOfBirth.getTime()) / SECONDS_PER_YEAR

          return differenceInYears > MIN_USER_AGE
        }

        return true
      },
      {
        message: t.dateOfBirth,
        path: ['dateOfBirth'],
      }
    )

export type UserProfileFormValuesType = z.infer<ReturnType<typeof userProfileSchema>>

export const useProfileForm = (values: UserProfileFormValuesType, errorsText: ErrorsTextProps) => {
  return useForm<UserProfileFormValuesType>({
    mode: 'onChange',
    resolver: zodResolver(userProfileSchema(errorsText)),
    values: values,
  })
}
