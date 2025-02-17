import { baseApi } from '@/shared/api/baseApi'
import { AvatarsType } from '@/shared/api/profileApi'

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
    getUserProfile: builder.query<GetUserProfileResponse, { userName: string }>({
      query: ({ userName }) => {
        return {
          method: 'GET',
          url: `users/${userName}`,
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

export const {
  useFollowMutation,
  useGetUserFollowersQuery,
  useGetUserFollowingQuery,
  useGetUserProfileQuery,
  useGetUsersQuery,
  useUnfollowMutation,
} = followApi

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
export type GetUsersResponseItems = {
  avatars: AvatarsType[]
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
  avatars: AvatarsType[]
  createdAt: string
  id: number
  isFollowedBy: boolean
  isFollowing: boolean
  userId: number
  userName: string
}

export enum User_Count_Info {
  FOLLOWERS_COUNT = 'followersCount',
  FOLLOWING_COUNT = 'followingCount',
  PUBLICATIONS_COUNT = 'publicationsCount',
}
export type GetUserProfileResponse = {
  aboutMe: string
  avatars: AvatarsType[]
  city: string
  country: string
  dateOfBirth: string
  firstName: string
  followersCount: number
  followingCount: number
  id: number
  isFollowedBy: boolean
  isFollowing: boolean
  lastName: string
  publicationsCount: number
  region: string
  userName: string
}
