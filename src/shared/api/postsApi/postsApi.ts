import { baseApi } from '@/shared/api/baseApi'
import { AvatarsType } from '@/shared/api/profileApi'

const postApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<GetPostResponse, CreatePostData>({
      invalidatesTags: ['Posts'],
      query: body => {
        return {
          body,
          method: 'POST',
          url: `/posts`,
        }
      },
    }),
    deletePost: builder.mutation<void, { postId: number }>({
      invalidatesTags: ['Posts'],
      query: ({ postId }) => {
        return {
          method: 'DELETE',
          url: `/posts/${postId}`,
        }
      },
    }),
    getPostLikes: builder.query<GetPostLikesResponse, GetPostLikesArgs>({
      providesTags: ['LikesInfo'],
      query: ({ postId, ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `/posts/${postId}/likes`,
        }
      },
    }),
    getPublicPost: builder.query<GetPostResponse, { postId: number }>({
      query: ({ postId }) => {
        return {
          method: 'GET',
          url: `/public-posts/${postId}`,
        }
      },
    }),
    getPublicPosts: builder.query<GetPostsResponse, GetPostsArgs>({
      query: ({ endCursorPostId, ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `/public-posts/all/${endCursorPostId}`,
        }
      },
    }),
    getPublicationsFollowers: builder.query<GetPublicationsResponse, GetPublicationsArgs>({
      query: ({ ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `/home/publications-followers`,
        }
      },
    }),
    getUserPosts: builder.query<GetPostsResponse, UserPostsArgs>({
      providesTags: ['Posts'],
      query: ({ endCursorPostId, userId, ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `/public-posts/user/${userId}/${endCursorPostId}`,
        }
      },
    }),
    updateLikeStatusPost: builder.mutation<void, UpdateLikeStatusRequest>({
      invalidatesTags: ['Posts', 'LikesInfo'],
      query: ({ postId, ...body }) => {
        return {
          body,
          method: 'PUT',
          url: `/posts/${postId}/like-status`,
        }
      },
    }),
    updatePost: builder.mutation<GetPostResponse, UpdatePostArgs>({
      invalidatesTags: ['Posts'],
      query: ({ postId, ...body }) => {
        return {
          body,
          method: 'PUT',
          url: `/posts/${postId}`,
        }
      },
    }),
    uploadPostPhoto: builder.mutation<FileUploadResponse, FormData>({
      query: file => {
        return {
          body: file,
          method: 'POST',
          url: `/posts/image`,
        }
      },
    }),
  }),
})

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostLikesQuery,
  useGetPublicPostQuery,
  useGetPublicPostsQuery,
  useGetPublicationsFollowersQuery,
  useGetUserPostsQuery,
  useUpdateLikeStatusPostMutation,
  useUpdatePostMutation,
  useUploadPostPhotoMutation,
} = postApi

export type GetPostResponse = {
  avatarOwner: string
  avatarWhoLikes: string[]
  createdAt: string
  description: string
  id: number
  images: PostResponseImages[]
  isLiked: boolean
  likesCount: number
  location: string
  owner: { firstName: string; lastName: string }
  ownerId: number
  updatedAt: string
  userName: string
}
export type PostResponseImages = {
  createdAt: string
  fileSize: number
  height: number
  uploadId: string
  url: string
  width: number
}

export type GetPostsResponse = {
  items: GetPostResponse[]
  pageSize?: number
  totalCount?: number
  totalUsers?: number
}

export type FileUploadResponse = { images: UploadResponseImages[] }

export type CreatePostData = {
  childrenMetadata: Array<{ uploadId: string }>
  description: string
}

export type UpdatePostData = { description: string }

export type UpdatePostArgs = { postId: number } & UpdatePostData
export type UserPostsArgs = { userId: number } & GetPostsArgs

export type GetPostsArgs = {
  endCursorPostId?: number
  pageSize?: number
  sortBy?: string
  sortDirection?: string
}
export type GetPostLikesArgs = {
  cursor?: number
  pageNumber?: number
  pageSize?: number
  postId: number
  search?: string
}

export type GetPublicationsArgs = {
  endCursorPostId?: number
  pageNumber?: number
  pageSize?: number
}

export type UploadResponseImages = {
  createdAt: string
  fileSize: number
  height: number
  uploadId: string
  url: string
  width: number
}

export type GetPublicationsResponse = {
  items: GetPublicationsResponseItem[]
  nextCursor: number
  page: number
  pageSize: number
  pagesCount: number
  prevCursor: number
  totalCount: number
}

export type GetPublicationsResponseItem = {
  avatarOwner: string
  avatarWhoLikes: string[]
  createdAt: string
  description: string
  id: number
  images: PostResponseImages[]
  isLiked: boolean
  likesCount: number
  location: string
  owner: { firstName: string; lastName: string }
  ownerId: number
  updatedAt: string
  userName: string
}
export type UpdateLikeStatusRequest = {
  likeStatus: string
  postId: number
}
export type GetPostLikesResponse = {
  items: {
    avatars: AvatarsType[]
    createdAt: string
    id: number
    isFollowedBy: boolean
    isFollowing: boolean
    userId: number
    userName: string
  }[]
  notReadCount: number
  pageSize: number
  totalCount: number
}
