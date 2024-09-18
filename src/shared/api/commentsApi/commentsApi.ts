import { baseApi } from '@/shared/api/baseApi'
import { PostResponseImages } from '@/shared/api/postsApi'

const commentsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createNewAnswerToComment: builder.mutation<CommentsViewModel, CreateAnswerToCommentRequest>({
      query: ({ commentId, postId, ...body }) => {
        return {
          body,
          method: 'POST',
          url: `/posts/${postId}/comments/${commentId}/answers`,
        }
      },
    }),
    createNewComment: builder.mutation<CommentsViewModel, CreateCommentRequest>({
      query: ({ postId, ...body }) => {
        return {
          body,
          method: 'POST',
          url: `/posts/${postId}/comments`,
        }
      },
    }),
    getAnswerCommentLikes: builder.query<GetCommentLikesResponse, GetAnswerCommentLikesRequest>({
      query: ({ answerId, commentId, postId, ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `/posts/${postId}/comments/${commentId}/answers/${answerId}/likes`,
        }
      },
    }),

    getAnswersToPostComment: builder.query<GetPostCommentsResponse, GetAnswersToPostCommentRequest>(
      {
        query: ({ commentId, postId, ...args }) => {
          return {
            method: 'GET',
            params: args,
            url: `/posts/${postId}/comments/${commentId}/answers`,
          }
        },
      }
    ),
    getCommentLikes: builder.query<GetCommentLikesResponse, GetCommentLikesRequest>({
      query: ({ commentId, postId, ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `/posts/${postId}/comments/${commentId}/likes`,
        }
      },
    }),
    getPostComments: builder.query<GetPostCommentsResponse, GetPostCommentsRequest>({
      query: ({ postId, ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `/posts/${postId}/comments`,
        }
      },
    }),
    updateAnswerLikeStatus: builder.mutation<void, UpdateAnswerLikeStatusRequest>({
      query: ({ answerId, commentId, postId, ...body }) => {
        return {
          body,
          method: 'PUT',
          url: `/posts/${postId}/comments/${commentId}/answer/${answerId}like-status`,
        }
      },
    }),
    updateLikeStatus: builder.mutation<void, UpdateLikeStatusRequest>({
      query: ({ commentId, postId, ...body }) => {
        return {
          body,
          method: 'PUT',
          url: `/posts/${postId}/comments/${commentId}/like-status`,
        }
      },
    }),
  }),
})

export const {
  useCreateNewAnswerToCommentMutation,
  useCreateNewCommentMutation,
  useGetAnswerCommentLikesQuery,
  useGetAnswersToPostCommentQuery,
  useGetCommentLikesQuery,
  useGetPostCommentsQuery,
  useUpdateAnswerLikeStatusMutation,
  useUpdateLikeStatusMutation,
} = commentsApi

export type CreateCommentRequest = {
  content: string
  postId: number
}
export type CreateAnswerToCommentRequest = {
  commentId: number
} & CreateCommentRequest

export type CommentsViewModel = {
  answerCount: number
  content: string
  createdAt: string
  from: {
    avatars: Array<any>
    id: number
    username: string
  }
  id: number
  isLiked: boolean
  likeCount: number
  postId: number
}

export type GetPostCommentsArg = {
  pageNumber?: number
  pageSize?: number
  sortBy?: string
  sortDirection?: string
}
export type GetPostCommentsRequest = {
  postId: number
} & GetPostCommentsArg

export type GetAnswersToPostCommentRequest = { commentId: number } & GetPostCommentsRequest

export type GetPostCommentsResponse = {
  items: Array<CommentsViewModel>
  pageSize: number
  totalCount: number
}

export type GetCommentLikesResponse = {
  items: Array<UserFollowingFollowersViewModel>
  pageSize: number
  totalCount: number
}

export type UserFollowingFollowersViewModel = {
  avatars: PostResponseImages[]
  createdAt: string
  id: number
  isFollowedBy: boolean
  isFollowing: boolean
  userId: number
  userName: string
}

export type GetCommentLikesArg = {
  cursor?: number
  pageNumber?: number
  pageSize?: number
  search?: string
}
export type GetCommentLikesRequest = {
  commentId: number
  postId: number
} & GetCommentLikesArg

export type GetAnswerCommentLikesRequest = { answerId: number } & GetCommentLikesRequest

export type UpdateLikeStatusRequest = {
  commentId: number
  likeStatus: string
  postId: number
}

export type UpdateAnswerLikeStatusRequest = { answerId: number } & UpdateLikeStatusRequest
