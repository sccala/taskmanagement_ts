/* eslint-disable react-hooks/exhaustive-deps*/
import { useCallback, useState } from 'react'
import { User } from '../types/api/user'
import { useMessage } from './useMessage'

type Props = {
  id: number
  users: Array<User>
  onOpen: () => void
}

//Custom hook to show Modal for selected user //
export const useSelectUser = () => {
  const { showMessage } = useMessage()
  const [selectedUser, setSelectedUser] = useState<User>()

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props
    const targetUser = users.find((user) => user.id === id)
    if (!targetUser) {
      showMessage({ title: 'Cannot find user', status: 'error' })
      return
    } else {
      setSelectedUser(targetUser)
      onOpen()
    }
  }, [])
  return { onSelectUser, selectedUser }
}
