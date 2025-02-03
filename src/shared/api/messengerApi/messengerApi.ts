import { baseApi } from '@/shared/api/baseApi'
import { AvatarsType } from '@/shared/api/profileApi'

const messengerApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    deleteMessage: builder.mutation<void, { id: number }>({
      query: ({ id }) => {
        return {
          method: 'DELETE',
          url: `messanger/${id}`,
        }
      },
    }),
    getLatestMessages: builder.query<GetMessagesResponse, GetMessagesArgs>({
      query: ({ ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `messanger`,
        }
      },
    }),
    getMessagesByUser: builder.query<GetMessagesByUserResponse, GetMessagesByUserArgs>({
      query: ({ dialoguePartnerId, ...args }) => {
        return {
          method: 'GET',
          params: args,
          url: `messanger/${dialoguePartnerId}`,
        }
      },
    }),

    updateMessageStatus: builder.mutation<void, { ids: number[] }>({
      query: body => {
        return {
          body,
          method: 'PUT',
          url: `messanger`,
        }
      },
    }),
  }),
})

export const {
  useDeleteMessageMutation,
  useGetLatestMessagesQuery,
  useGetMessagesByUserQuery,
  useUpdateMessageStatusMutation,
} = messengerApi

export type GetMessagesArgs = {
  cursor?: number
  pageSize?: number
  searchName?: string
}
export type MessagesResponse<T> = {
  items: T[]
  notReadCount: number
  pageSize: number
  totalCount: number
}
export type GetMessagesResponse = MessagesResponse<MessageViewDto>

export type GetMessagesByUserArgs = GetMessagesArgs & {
  dialoguePartnerId: number
}
export type GetMessagesByUserResponse = MessagesResponse<MessageViewModel>

export type MessageViewDto = {
  avatars: AvatarsType[]
  createdAt: string
  id: number
  messageText: string
  messageType: MessageType
  ownerId: number
  receiverId: number
  status: MessageStatus
  updatedAt: '2025-01-19T17:39:36.085Z'
  userName: 'string'
}
export type MessageViewModel = Omit<MessageViewDto, 'avatars' | 'userName'>

export enum MessageType {
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
  VOICE = 'VOICE',
}

export enum MessageStatus {
  READ = 'READ',
  RECEIVED = 'RECEIVED',
  SENT = 'SENT',
}
