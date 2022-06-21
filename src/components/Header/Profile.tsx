import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box 
                mr="4" 
                textAlign="right">
                <Text>Wellington Barea</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >wellington.gabriel90@gmail.com</Text>
            </Box>

            <Avatar 
                size="md" 
                name="Wellington Barea" />
        </Flex>
    );
}