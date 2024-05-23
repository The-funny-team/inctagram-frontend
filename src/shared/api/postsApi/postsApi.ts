import { baseApi } from '@/shared/api/baseApi'

const postApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<GetPostResponse, CreatePostData>({
      invalidatesTags: ['Posts'],
      query: body => {
        return {
          body,
          method: 'POST',
          url: `/post`,
        }
      },
    }),
    deletePost: builder.mutation<void, { id: string }>({
      invalidatesTags: ['Posts'],
      query: ({ id }) => {
        return {
          method: 'DELETE',
          url: `/post/${id}`,
        }
      },
    }),
    getPost: builder.query<GetPostResponse, { id: string }>({
      query: ({ id }) => {
        return {
          method: 'GET',
          url: `/post/${id}`,
        }
      },
    }),
    getPublicPost: builder.query<GetPostResponse, { id: string }>({
      query: ({ id }) => {
        return {
          method: 'GET',
          url: `/post/${id}`,
        }
      },
    }),
    getPublicPosts: builder.query<GetPostsResponse, GetPostsArgs>({
      query: args => {
        return {
          method: 'GET',
          params: args,
          url: `/public/post`,
        }
      },
    }),
    getUserPosts: builder.query<GetPostsResponse, GetPostsArgs>({
      providesTags: ['Posts'],
      query: args => {
        return {
          method: 'GET',
          params: args,
          url: `/post`,
        }
      },
    }),
    updatePost: builder.mutation<GetPostResponse, UpdatePostArgs>({
      invalidatesTags: ['Posts'],
      query: ({ id, ...body }) => {
        return {
          body,
          method: 'PUT',
          url: `/post/${id}`,
        }
      },
    }),
    uploadPostPhoto: builder.mutation<FileUploadResponse, FormData>({
      query: file => {
        return {
          body: file,
          method: 'POST',
          url: `/post/image`,
        }
      },
    }),
  }),
})

export const {
  useUploadPostPhotoMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
  useGetPublicPostsQuery,
  useDeletePostMutation,
  useGetPostQuery,
  useGetPublicPostQuery,
  useGetUserPostsQuery,
} = postApi

export type GetPostResponse = {
  authorId: string
  createdAt: string
  description: string
  id: string
  imagesUrl: string[]
  updatedAt: string
}

export type GetPostsResponse = [] | GetPostResponse[]

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
