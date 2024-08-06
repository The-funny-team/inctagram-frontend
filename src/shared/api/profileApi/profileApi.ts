import { baseApi } from '@/shared/api/baseApi'

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    deleteAvatar: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      query: () => ({
        method: 'DELETE',
        url: '/users/profile/avatar',
      }),
    }),
    getProfileInfo: builder.query<void, void>({
      query: () => ({
        method: 'GET',
        url: `/users/profile`,
      }),
    }),
    getPublicUserInfo: builder.query<User, { userName: string }>({
      query: ({ userName }) => ({
        method: 'GET',
        url: `public-user/profile/${userName}`,
      }),
    }),
    getUsersCount: builder.query<UsersCount, void>({
      query: () => ({
        method: 'GET',
        url: '/public-user',
      }),
    }),
    updateAvatar: builder.mutation<void, AvatarDto>({
      invalidatesTags: ['Me'],
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
    updateUser: builder.mutation<User, UpdateUserDto>({
      invalidatesTags: ['Me'],
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
  useGetUserInfoQuery,
  useGetUsersCountQuery,
  useUpdateAvatarMutation,
  useUpdateUserMutation,
} = profileApi

export type User = {
  aboutMe: null | string
  avatarUrl: null | string
  city: null | string
  country: null | string
  createdAt: string
  dateOfBirth: null | string
  email: string
  firstName: null | string
  id: string
  lastName: null | string
  updatedAt: string
  username: string
}

type UpdateUserDto = {
  aboutMe?: string | undefined
  city?: string | undefined
  country?: string | undefined
  dateOfBirth?: Date | undefined
  firstName: string
  lastName: string
  username: string
}

type AvatarDto = {
  file: File
}

type UsersCount = {
  totalCount: number
}
