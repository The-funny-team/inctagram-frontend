import { baseApi } from '@/shared/api/baseApi'

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
  useGetPublicPostQuery,
  useGetPublicPostsQuery,
  useGetUserPostsQuery,
  useUpdatePostMutation,
  useUploadPostPhotoMutation,
} = postApi

export type GetPostResponse = {
  avatarOwner: string
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
  data: GetPostResponse[]
  hasNextPage?: boolean
  hasPreviousPage?: boolean
  page?: number
  pageSize?: number
  pagesCount?: number
  totalCount?: number
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

export type UploadResponseImages = {
  createdAt: string
  fileSize: number
  height: number
  uploadId: string
  url: string
  width: number
}
