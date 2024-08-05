import { baseApi } from '@/shared/api/baseApi'
import { ACCESS_TOKEN } from '@/shared/const'
import { saveToLocalStorage } from '@/shared/lib/helpers'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createNewPassword: builder.mutation<void, NewPasswordRequestType>({
      query: body => {
        return {
          body,
          method: 'POST',
          url: '/auth/new-password',
        }
      },
    }),
    emailConfirmation: builder.mutation<void, string | string[]>({
      query: code => ({
        body: { confirmationCode: code },
        method: 'POST',
        url: '/auth/registration-confirmation',
      }),
    }),
    emailResending: builder.mutation<void, EmailResendingRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/registration-email-resending',
      }),
    }),
    loginByGoogle: builder.query<SignInResponseType, ConfirmationCodeDto>({
      query: ({ code }) => ({
        method: 'GET',
        params: { code },
        url: 'auth/google/login',
      }),
    }),
    logout: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authApi.util.updateQueryData('me', undefined, () => {
            return null
          })
        )

        localStorage.removeItem('accessToken')

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      query: () => ({
        method: 'POST',
        url: '/auth/logout',
      }),
    }),
    me: builder.query<MeResponse, void>({
      providesTags: ['Me'],
      query: () => ({
        method: 'GET',
        url: '/auth/me',
      }),
    }),
    passwordRecovery: builder.mutation<void, { email: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/password-recovery',
      }),
    }),
    passwordRecoveryResending: builder.mutation<void, ConfirmationCodeDto>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/password-recovery-resending',
      }),
    }),
    signIn: builder.mutation<SignInResponseType, SignInRequestType>({
      invalidatesTags: ['Me'],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          saveToLocalStorage(ACCESS_TOKEN, data.accessToken)
        } catch {
          localStorage.removeItem(ACCESS_TOKEN)
        }
      },
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/login',
      }),
    }),
    signUp: builder.mutation<string, CreateUserDto>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/registration',
      }),
    }),
  }),
})

export const {
  useCreateNewPasswordMutation,
  useEmailConfirmationMutation,
  useEmailResendingMutation,
  useLoginByGoogleQuery,
  useLogoutMutation,
  useMeQuery,
  usePasswordRecoveryMutation,
  usePasswordRecoveryResendingMutation,
  useSignInMutation,
  useSignUpMutation,
} = authApi

export type CreateUserDto = {
  baseUrl: string
  email: string
  password: string
  userName: string
}

export type SignUpResponse = {
  aboutMe: null | string
  avatarUrl: null | string
  city: null | string
  country: null | string
  createdAt: string
  dateOfBirth: null | string
  email: string
  firstName: null | string
  id: string
  lastName: null | string
  updatedAt: string
  username: string
}

export type SignInRequestType = Pick<CreateUserDto, 'email' | 'password'>

export type SignInResponseType = { accessToken: string }

export type NewPasswordRequestType = {
  newPassword: string
  recoveryCode: string
}

type ConfirmationCodeDto = {
  code: string
}
type EmailResendingRequestType = Pick<CreateUserDto, 'baseUrl' | 'email'>
type MeResponse = {
  email: string
  isBlocked: boolean
  userId: number
  userName: string
} | null
