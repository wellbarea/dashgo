import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface Props extends LinkProps {
    icon: ElementType;
    children: string;
}

export function NavLink({ icon, children, ...props }: Props) {
    return (
        <Link display="flex" alignItems="center" {...props}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontSize="medium"> {children} </Text>
        </Link>
    );
}