import { ProfileType } from '@/shared/api/profileApi'

export const profileFormDataCreator = (data: ProfileType | null | undefined) => {
  return {
    aboutMe: data?.aboutMe || '',
    city: data?.city || '',
    country: data?.country || '',
    dateOfBirth: (data?.dateOfBirth && new Date(data.dateOfBirth)) || null,
    firstName: data?.firstName || '',
    lastName: data?.lastName || '',
    userName: data?.userName || '',
  }
}
