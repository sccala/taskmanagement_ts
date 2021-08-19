import { VFC, memo } from 'react'
import {
  Modal,
  Stack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { User } from '../../../types/api/user'

type Props = {
  isOpen: boolean
  onClose: () => void
  user: User | undefined
}
export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>User Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={user?.username} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input value={user?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input value={user?.email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input value={user?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
