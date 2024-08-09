export const BASE_URL = 'https://funny-inctagram.site/'
export const BASE_LOCAL_URL = 'http://localhost:3000'

export const BASE_API_URL = 'https://inctagram.work/api/v1/'
const GOOGLE_OAUTH_CLIENT_ID =
  '617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com'

const FRONTEND_REDIRECT_URL = `${BASE_URL}auth/google`

export const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=email profile&response_type=code&redirect_uri=${FRONTEND_REDIRECT_URL}&client_id=${GOOGLE_OAUTH_CLIENT_ID}`
