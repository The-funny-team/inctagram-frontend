import { baseApi } from '@/shared/api/baseApi'

const deviceApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllDevices: builder.query<GetDevicesResponse, void>({
      providesTags: ['Devices'],
      query: () => {
        return {
          method: 'GET',
          url: `/sessions`,
        }
      },
    }),
    terminateSessionsAllDevices: builder.mutation<void, void>({
      invalidatesTags: ['Devices'],
      query: () => {
        return {
          method: 'DELETE',
          url: `/sessions/terminate-all`,
        }
      },
    }),
    terminateSessionsOneDevice: builder.mutation<void, { deviceId: number }>({
      invalidatesTags: ['Devices'],
      query: ({ deviceId }) => {
        return {
          method: 'DELETE',
          url: `/sessions/${deviceId}`,
        }
      },
    }),
  }),
})

export const {
  useGetAllDevicesQuery,
  useTerminateSessionsAllDevicesMutation,
  useTerminateSessionsOneDeviceMutation,
} = deviceApi

export type GetDevicesResponse = {
  current: SessionType
  others: SessionType[]
}

export type SessionType = {
  browserName: string
  browserVersion: string
  deviceId: number
  deviceName: string
  deviceType: string
  ip: string
  lastActive: string
  osName: string
  osVersion: string
}
