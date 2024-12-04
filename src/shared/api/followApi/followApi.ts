import { baseApi } from '@/shared/api/baseApi'

const followApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    follow: builder.mutation<void, { selectedUserId: number }>({
      query: ({ selectedUserId }) => {
        return {
          body: { selectedUserId },
          method: 'POST',
          url: `users/following`,
        }
      },
    }),
    getUserFollowers: builder.query<GetUserFollowResponse, GetUserFollowArgs>({
      query: ({ userName, ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `users/${userName}/followers`,
        }
      },
    }),
    getUserFollowing: builder.query<GetUserFollowResponse, GetUserFollowArgs>({
      query: ({ userName, ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `users/${userName}/following`,
        }
      },
    }),
    getUsers: builder.query<GetUsersResponse, GetUsersArgs>({
      query: ({ ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `/users`,
        }
      },
    }),
    unfollow: builder.mutation<void, { userId: number }>({
      query: ({ userId }) => {
        return {
          method: 'DELETE',
          url: `users/follower/${userId}`,
        }
      },
    }),
  }),
})

export const { useGetUsersQuery, useLazyGetUsersQuery } = followApi

export type GetUsersArgs = {
  cursor?: number
  pageNumber?: number
  pageSize?: number
  search?: string
}
export type GetUserFollowArgs = GetUsersArgs & { userName: string }
export type GetUsersResponse = {
  items: GetUsersResponseItems[]
  nextCursor: number
  page: number
  pageSize: number
  pagesCount: number
  prevCursor: number
  totalCount: number
}
export type GetItemsAvatars = {
  createdAt: string
  fileSize: number
  height: number
  url: string
  width: number
}
export type GetUsersResponseItems = {
  avatars: GetItemsAvatars[]
  createdAt: string
  firstName: string
  id: number
  lastName: string
  userName: string
}

export type GetUserFollowResponse = {
  items: GetUserFollowResponseItems
  nextCursor: number
  page: number
  pageSize: number
  pagesCount: number
  prevCursor: number
  totalCount: number
}

export type GetUserFollowResponseItems = {
  avatars: GetItemsAvatars[]
  createdAt: string
  id: number
  isFollowedBy: boolean
  isFollowing: boolean
  userId: number
  userName: string
}
