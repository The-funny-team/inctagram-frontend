export const BASE_URL = 'https://funny-inctagram.site'
export const BASE_LOCAL_URL = 'http://localhost:3000'

export const BASE_API_URL = 'https://inctagram.work/api/v1/'
const GOOGLE_OAUTH_CLIENT_ID =
  '617342613759-f3kbvgm8l310fn40vh6qna2pv8u2uccr.apps.googleusercontent.com'
const REDIRECT_URL = process.env.NODE_ENV === 'development' ? BASE_LOCAL_URL : BASE_URL

export const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_OAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope= profile email openid&response_type=code`
