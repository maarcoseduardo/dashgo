import { Avatar, Box, Text, Flex } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}


export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcos Eduardo</Text>
          <Text color="gray.300" fontSize="small">
            e-mail@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Marcos Eduardo"
        src="https://github.com/maarcoseduardo.png" />
    </Flex>
  )
}