/* eslint-disable react-hooks/exhaustive-deps*/
import { VFC, memo, useEffect, useCallback } from 'react'
import { Wrap, WrapItem, Spinner, Center, useDisclosure } from '@chakra-ui/react'

import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserDetailModal } from '../organisms/user/UserDetailModal'
import { useSelectUser } from '../../hooks/useSelectUsers'
import { useLoginUser } from '../../hooks/useLoginUser'

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, users, loading } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()
  const { loginUser } = useLoginUser()

  useEffect(() => getUsers(), [])

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen })
    },
    [users, onSelectUser, onOpen]
  )

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap justify="space-around" p={{ base: '4', md: '10' }}>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                ImageUrl="https://source.unsplash.com/random"
                UserName={user.username}
                FullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
      />
    </>
  )
})
