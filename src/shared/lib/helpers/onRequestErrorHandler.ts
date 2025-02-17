import { ErrorOption } from 'react-hook-form'
import { toast } from 'react-toastify'

import { isFetchBaseQueryError } from './isFetchBaseQueryError'
import { isFetchError } from './isFetchError'

export const onRequestErrorHandler = <T>(
  error: unknown,
  setError: (name: T, error: ErrorOption) => void,
  fieldName?: T
) => {
  if (isFetchBaseQueryError(error)) {
    if (Array.isArray(error.data.messages)) {
      error.data.messages.forEach(item =>
        setError(item.field as T, { message: item.message, type: 'validationError' })
      )
    } else {
      if (fieldName && error.status === 401) {
        setError(fieldName, { message: error.data.messages, type: 'validationError' })
      } else {
        toast.error(error.data.messages as string)
      }
    }
  }
  if (isFetchError(error)) {
    toast.error(error.error)
  }
}
