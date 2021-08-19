import { VFC, memo } from 'react'
import { Box, Stack, Image, Text } from '@chakra-ui/react'

type Props = {
  id: number
  ImageUrl: string
  UserName: string
  FullName: string
  onClick: (id: number) => void
}
export const UserCard: VFC<Props> = memo((props) => {
  const { id, ImageUrl, UserName, FullName, onClick } = props
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image src={ImageUrl} boxSize="160px" borderRadius="full" alt={UserName} m="auto" />
        <Text fontSize="lg" fontWeight="bold">
          {UserName}
        </Text>
        <Text fontSize="sm" color="gray">
          {FullName}
        </Text>
      </Stack>
    </Box>
  )
})
