import React from 'react';
import { Flex, Image, Stack } from "@chakra-ui/react"
    
export default function Header() {
    
    return(
        <Flex direction="row" align="center" justify="center" position="relative" mt="-70">
            <Image
                src="/images/logo.png"
                alt="logo-mczink"
            />
        </Flex>    
    );
}