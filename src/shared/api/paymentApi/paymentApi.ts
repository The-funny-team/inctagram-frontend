import { baseApi } from '@/shared/api/baseApi'

const paymentApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    cancelAutoRenewal: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: 'subscriptions/canceled-auto-renewal',
      }),
    }),
    createPaymentSubscriptions: builder.mutation<
      CreatePaymentSubscriptionsResponse,
      CreatePaymentSubscriptionsArgs
    >({
      invalidatesTags: ['Payments'],
      query: args => ({
        body: args,
        method: 'POST',
        url: 'subscriptions',
      }),
    }),
    getCostOfPaymentSubscriptions: builder.query<GetCostOfPaymentSubscriptionsResponse, void>({
      query: () => ({
        method: 'GET',
        url: 'subscriptions/cost-of-payment-subscriptions',
      }),
    }),
    getCurrentPaymentSubscriptions: builder.query<GetCurrentPaymentSubscriptionsResponse, void>({
      query: () => ({
        method: 'GET',
        url: 'subscriptions/current-payment-subscriptions',
      }),
    }),
    getPayments: builder.query<GetPaymentsResponse, void>({
      providesTags: ['Payments'],
      query: () => ({
        method: 'GET',
        url: 'subscriptions/my-payments',
      }),
    }),
  }),
})

export const {
  useCancelAutoRenewalMutation,
  useCreatePaymentSubscriptionsMutation,
  useGetCostOfPaymentSubscriptionsQuery,
  useGetCurrentPaymentSubscriptionsQuery,
  useGetPaymentsQuery,
} = paymentApi

export type GetPaymentsResponse = Payment[]
export type Payment = {
  dateOfPayment: string
  endDateOfSubscription: string
  paymentType: PaymentType
  price: number
  subscriptionId: string
  subscriptionType: SubscriptionType
  userId: number
}

export type GetCurrentPaymentSubscriptionsResponse = {
  data: CurrentPaymentSubscription[]
  hasAutoRenewal: boolean
}
export type CurrentPaymentSubscription = {
  autoRenewal: boolean
  dateOfPayment: string
  endDateOfSubscription: string
  subscriptionId: string
  userId: number
}

export type GetCostOfPaymentSubscriptionsResponse = {
  data: CostOfPaymentSubscription[]
}
export type CostOfPaymentSubscription = {
  amount: number
  typeDescription: SubscriptionType
}

export type CreatePaymentSubscriptionsArgs = {
  amount: number
  baseUrl: string
  paymentType: PaymentType
  typeSubscription: SubscriptionType
}
export type CreatePaymentSubscriptionsResponse = {
  url: string
}

export type PaymentType = 'CREDIT_CARD' | 'PAYPAL' | 'STRIPE'
export type SubscriptionType = 'DAY' | 'MONTHLY' | 'WEEKLY'
