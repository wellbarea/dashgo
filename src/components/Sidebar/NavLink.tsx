import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link';

interface Props extends LinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...props }: Props) {
    return (
        <Link href={href} passHref>
            <ChakraLink display="flex" alignItems="center" {...props}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontSize="medium"> {children} </Text>
            </ChakraLink>
        </Link>
    );
}