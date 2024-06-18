import { baseApi } from '@/shared/api/baseApi'

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    deleteAvatar: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      query: () => ({
        method: 'DELETE',
        url: '/user/avatar',
      }),
    }),
    getTotalUsersCount: builder.query<{ totalCount: number }, void>({
      query: () => ({
        method: 'GET',
        url: '/public-user/total',
      }),
    }),
    getUserByUserName: builder.query<User, { userName: string }>({
      query: ({ userName }) => ({
        method: 'GET',
        url: `/public-user/profile/${userName}`,
      }),
    }),
    me: builder.query<MeResponse, void>({
      providesTags: ['Me'],
      query: () => ({
        method: 'GET',
        url: '/user/profile',
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
          url: '/user/avatar',
        }
      },
    }),
    updateUser: builder.mutation<User, UpdateUserDto>({
      invalidatesTags: ['Me'],
      query: body => {
        return {
          body,
          method: 'PUT',
          url: '/user',
        }
      },
    }),
  }),
})

export const {
  useDeleteAvatarMutation,
  useGetTotalUsersCountQuery,
  useGetUserByUserNameQuery,
  useMeQuery,
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

type MeResponse = User | null
