import axios from 'axios'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { User } from '../types/api/user'

export const useAuth = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const login = useCallback(
    (id: string) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push('/home')
          } else {
            alert('User is not found')
          }
        })
        .catch(() => alert('User not found'))
        .finally(() => setLoading(false))
    },
    [history]
  )
  return { login, loading }
}
