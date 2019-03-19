import { API_URL } from 'react-native-dotenv'

const getStudentId = ({ user }) => user.email.split('@', 1)[0]

export const getUser = async userInfo => {
  const studentId = getStudentId(userInfo)
  const res = await fetch(`${API_URL}/users/${studentId}`, {
    method: 'GET',
    headers: { Auth: `Bearer ${userInfo.accessToken}` },
  })
  if (res.ok) {
    return res.json()
  } else {
    return res.text()
  }
}

export const createUser = async userInfo => {
  const studentId = getStudentId(userInfo)
  const { degree } = userInfo

  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      Auth: `Bearer ${userInfo.idToken}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      ...userInfo.user,
      studentId,
      degree,
    }),
  })
  if (res.ok) {
    return res.json()
  } else {
    return res.text()
  }
}
