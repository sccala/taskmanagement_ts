import { VFC, memo } from 'react'
import { Button } from '@chakra-ui/button'
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/modal'

type Props = {
  onClose: () => void
  isOpen: boolean
  onClickHome: () => void
  onClickUserManagement: () => void
  onClickSetting: () => void
}
export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting } = props
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button onClick={onClickHome} w="100%">
              TOP
            </Button>
            <Button onClick={onClickUserManagement} w="100%">
              User All
            </Button>
            <Button onClick={onClickSetting} w="100%">
              Setting
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})
