import { useGetProfileInfoQuery, useUpdateUserMutation } from '@/shared/api/profileApi'
import { profileFormDataCreator } from '@/shared/lib/helpers'
import { useTranslation } from '@/shared/lib/hooks'

export const useProfileData = () => {
  const { data } = useGetProfileInfoQuery()
  const { text } = useTranslation()
  const {
    profileInfoForm: formText,
    profileInfoFormErrors: formErrorsText,
    profileNotifications,
  } = text.pages.profile
  const formData = profileFormDataCreator(data)
  const [updateProfile] = useUpdateUserMutation()

  return {
    formData,
    formErrorsText,
    formText,
    profileNotifications,
    updateProfile,
  }
}
