import { baseApi } from '@/shared/api/baseApi'

const notificationsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    deleteNotificationById: builder.mutation<void, { id: number }>({
      query: id => {
        return {
          method: 'DELETE',
          url: `/notifications/${id}`,
        }
      },
    }),
    getNotifications: builder.query<NotificationsResponse, any>({
      providesTags: ['Header'],
      query: () => {
        return {
          method: 'GET',
          url: `/notifications/?pageSize=120`,
        }
      },
    }),
    markNotificationAsRead: builder.mutation<void, MarkNotificationType>({
      invalidatesTags: ['Header'],
      query: body => {
        return {
          body,
          method: 'PUT',
          url: `/notifications/mark-as-read`,
        }
      },
    }),
  }),
})

export const {
  useGetNotificationsQuery,
  useLazyGetNotificationsQuery,
  useMarkNotificationAsReadMutation,
} = notificationsApi

export type NotificationType = {
  id: number
  isRead: boolean
  message: string
  notifyAt: string
}

export type NotificationsResponse = {
  items: NotificationType[]
  pageSize: number
  totalCount: number
}
export type MarkNotificationType = { ids: number[] }
