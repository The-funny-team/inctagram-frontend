type ErrorData = {
  data: {
    error: string
    messages: { field: string; message: string }[]
    statusCode: number
  }
  status: number
}

export const isFetchBaseQueryError = (error: unknown): error is ErrorData => {
  return typeof error === 'object' && error !== null && 'data' in error
}
