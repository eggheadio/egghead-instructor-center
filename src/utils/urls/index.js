export const getLoginUrl = () => (
  `${process.env.REACT_APP_EGGHEAD_BASE_URL}/users/jwt?return_to=${window.location.href}`
)

export const guideUrl = 'https://instructor.egghead.io/guide'

export const chatUrl = 'https://eggheadio.slack.com/messages/egghead-instructors/'
