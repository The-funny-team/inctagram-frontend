import { baseApi } from '@/shared/api/baseApi'

const postApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<PostResponseType, CreatePostDto>({
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
    getPost: builder.query<PostResponseType, { id: string }>({
      query: ({ id }) => {
        return {
          method: 'GET',
          url: `post/${id}`,
        }
      },
    }),
    getPublicPost: builder.query<PostResponseType, { id: string }>({
      query: ({ id }) => {
        return {
          method: 'GET',
          url: `post/${id}`,
        }
      },
    }),
    getPublicPosts: builder.query<PostsResponse, GetPostsArgs>({
      query: args => {
        return {
          method: 'GET',
          params: args,
          url: `/public/post`,
        }
      },
    }),
    getUserPosts: builder.query<PostsResponse, GetPostsArgs>({
      providesTags: ['Posts'],
      query: args => {
        return {
          method: 'GET',
          params: args,
          url: `post`,
        }
      },
    }),
    updatePost: builder.mutation<PostResponseType, UpdatePostArgs>({
      invalidatesTags: ['Posts'],
      query: ({ id, ...body }) => {
        return {
          body,
          method: 'PUT',
          url: `post/${id}`,
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

export type PostResponseType = {
  authorId: string
  createdAt: string
  description: string
  id: string
  imagesUrl: string
  updatedAt: string
}
export type PostsResponse = PostResponseType[]

export type FileUploadResponse = { fileId: string }

export type CreatePostDto = {
  description: string
  images: string[]
}

export type UpdatePostDto = { description: string }

export type UpdatePostArgs = { id: string } & UpdatePostDto

export type GetPostsArgs = {
  skip?: number
  sortDirection?: 'asc' | 'desc'
  sortField?: 'createdAt' | 'updatedAt'
  take?: number
}
