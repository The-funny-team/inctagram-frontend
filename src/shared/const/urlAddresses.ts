const BASE_URL = 'https://funny-inctagram.site/'

export const BASE_API_URL = 'https://funny-inctagram.site/api/v1'
const GOOGLE_OAUTH_CLIENT_ID =
  '345492523163-2pqkddlousgd8mnjnvq5s4q76s3v7fms.apps.googleusercontent.com'

const FRONTEND_REDIRECT_URL = `${BASE_URL}auth/google`

export const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=email profile&response_type=code&redirect_uri=${FRONTEND_REDIRECT_URL}&client_id=${GOOGLE_OAUTH_CLIENT_ID}`
