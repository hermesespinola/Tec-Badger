const getStudentId = ({ user }) => user.email.split('@', 1)[0]

// TODO: unhardcode this
export const getUser = async userInfo => {
  const studentId = getStudentId(userInfo)
  const res = await fetch(`127.0.0.1:3000/users/${studentId}`, {
    method: 'GET',
    headers: { Auth: `Bearer ${userInfo.accessToken}` },
  })
  return res.json()
}

export const createUser = async userInfo => {
  const studentId = getStudentId(userInfo)
  await fetch(`127.0.0.1:3000/users`, {
    method: 'POST',
    headers: { Auth: `Bearer ${userInfo.accessToken}` },
    body: {
      user: {
        ...user,
        studentId,
      },
    },
  })
}
