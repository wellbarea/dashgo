import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface Props {
    showProfileData: boolean;
}

export default function Profile({ showProfileData }: Props) {
    return (
        <Flex
            align="center"
        >
            { showProfileData && (
                <Box 
                    mr="4" 
                    textAlign="right">
                    <Text>Wellington Barea</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >wellington.gabriel90@gmail.com</Text>
                </Box>
            ) }

            <Avatar 
                size="md" 
                name="Wellington Barea" />
        </Flex>
    );
}