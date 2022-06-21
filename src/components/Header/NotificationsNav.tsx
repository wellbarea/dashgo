import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserLine } from "react-icons/ri";

export default function NotificationsNav() {
    return (
        <HStack 
            mx="8"
            spacing="8"
            pr="8"
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
            >
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiUserLine} fontSize="20" />
        </HStack>
    );
}