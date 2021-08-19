import axios from 'axios'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { User } from '../types/api/user'
import { useMessage } from './useMessage'

export const useAuth = () => {
  const history = useHistory()
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const login = useCallback(
    (id: string) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'Login success', status: 'success' })
            history.push('/home')
          } else {
            showMessage({ title: 'User Not Found', status: 'error' })
          }
        })
        .catch(() => showMessage({ title: 'Cannot Login', status: 'error' }))
        .finally(() => setLoading(false))
    },
    [history, showMessage]
  )
  return { login, loading }
}
