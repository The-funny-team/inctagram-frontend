import { baseApi } from '@/shared/api/baseApi'

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    deleteAvatar: builder.mutation<void, void>({
      invalidatesTags: ['Profile'],
      query: () => ({
        method: 'DELETE',
        url: '/users/profile/avatar',
      }),
    }),
    getProfileInfo: builder.query<ProfileType, void>({
      providesTags: ['Profile'],
      query: () => ({
        method: 'GET',
        url: `/users/profile`,
      }),
    }),
    getPublicUserInfo: builder.query<PublicProfileType, { profileId: number }>({
      query: ({ profileId }) => ({
        method: 'GET',
        url: `public-user/profile/${profileId}`,
      }),
    }),
    getUsersCount: builder.query<UsersCount, void>({
      query: () => ({
        method: 'GET',
        url: '/public-user',
      }),
    }),
    updateAvatar: builder.mutation<void, AvatarDto>({
      invalidatesTags: ['Profile'],
      query: ({ file }) => {
        const formData = new FormData()

        formData.append('file', file)

        return {
          body: formData,
          method: 'POST',
          url: '/users/profile/avatar',
        }
      },
    }),
    updateUser: builder.mutation<void, UpdateProfileType>({
      invalidatesTags: ['Profile'],
      query: body => {
        return {
          body,
          method: 'PUT',
          url: '/users/profile',
        }
      },
    }),
  }),
})

export const {
  useDeleteAvatarMutation,
  useGetProfileInfoQuery,
  useGetPublicUserInfoQuery,
  useGetUsersCountQuery,
  useUpdateAvatarMutation,
  useUpdateUserMutation,
} = profileApi

export type ProfileType = {
  aboutMe: string
  avatars: AvatarsType[]
  city: string
  country: string
  createdAt: string
  dateOfBirth: string
  firstName: string
  id: number
  lastName: string
  userName: string
}
export type PublicProfileType = {
  aboutMe: string
  avatars: AvatarsType[]
  id: number
  userName: string
}

export type AvatarsType = {
  createdAt: string
  fileSize: number
  height: number
  url: string
  width: number
}

export type UpdateProfileType = {
  aboutMe?: string
  city?: string
  country?: string
  dateOfBirth?: Date
  firstName: string
  lastName: string
  userName: string
}

type AvatarDto = {
  file: File
}

type UsersCount = {
  totalCount: number
}
