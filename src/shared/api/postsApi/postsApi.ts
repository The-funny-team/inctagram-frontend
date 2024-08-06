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
    deletePost: builder.mutation<void, { id: string }>({
      invalidatesTags: ['Posts'],
      query: ({ id }) => {
        return {
          method: 'DELETE',
          url: `/posts/${id}`,
        }
      },
    }),
    getPublicPost: builder.query<GetPostResponse, { id: string }>({
      query: ({ id }) => {
        return {
          method: 'GET',
          url: `/public-posts/${id}`,
        }
      },
    }),
    getPublicPosts: builder.query<GetPostsResponse, GetPostsArgs>({
      query: args => {
        return {
          method: 'GET',
          params: args,
          url: `/public-posts/all/${endCursorPostId}`,
        }
      },
    }),
    getUserPosts: builder.query<GetPostsResponse, GetPostsArgs>({
      providesTags: ['Posts'],
      query: args => {
        return {
          method: 'GET',
          params: args,
          url: `/public-posts/user/${userId}/${endCursorPostId}`,
        }
      },
    }),
    updatePost: builder.mutation<GetPostResponse, UpdatePostArgs>({
      invalidatesTags: ['Posts'],
      query: ({ id, ...body }) => {
        return {
          body,
          method: 'PUT',
          url: `/posts/${id}`,
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
  useGetPostQuery,
  useGetPublicPostQuery,
  useGetPublicPostsQuery,
  useGetUserPostsQuery,
  useUpdatePostMutation,
  useUploadPostPhotoMutation,
} = postApi

export type GetPostResponse = {
  author: {
    avatarUrl: string
    id: string
    name: string
  }
  createdAt: string
  description: string
  id: string
  imagesUrl: string[]
  updatedAt: string
}

export type GetPostsResponse = {
  data: GetPostResponse[]
  hasNextPage: boolean
  hasPreviousPage: boolean
  page: number
  pageSize: number
  pagesCount: number
  totalCount: number
}

export type FileUploadResponse = { fileId: string }

export type CreatePostData = {
  description: string
  images: string[]
}

export type UpdatePostData = { description: string }

export type UpdatePostArgs = { id: string } & UpdatePostData

export type GetPostsArgs = {
  skip?: number
  sortDirection?: 'asc' | 'desc'
  sortField?: 'createdAt' | 'updatedAt'
  take?: number
}
