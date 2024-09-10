import { baseApi } from '@/shared/api/baseApi'
import { ACCESS_TOKEN } from '@/shared/const'
import { saveToLocalStorage } from '@/shared/lib/helpers'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    checkRecoveryCode: builder.mutation<{ email: string }, { recoveryCode: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/check-recovery-code',
      }),
    }),
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
    passwordRecovery: builder.mutation<void, PasswordRecoveryResponse>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/password-recovery',
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
  useCheckRecoveryCodeMutation,
  useCreateNewPasswordMutation,
  useEmailConfirmationMutation,
  useEmailResendingMutation,
  useLoginByGoogleQuery,
  useLogoutMutation,
  useMeQuery,
  usePasswordRecoveryMutation,

  useSignInMutation,
  useSignUpMutation,
} = authApi

export type CreateUserDto = {
  baseUrl: string
  email: string
  password: string
  userName: string
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
type PasswordRecoveryResponse = EmailResendingRequestType & { recaptcha: string }
type MeResponse = {
  email: string
  isBlocked: boolean
  userId: number
  userName: string
} | null
