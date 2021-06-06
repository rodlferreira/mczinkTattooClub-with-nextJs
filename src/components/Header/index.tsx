import React from 'react';
import { Flex, Image, Stack } from "@chakra-ui/react"
    
export default function Header() {
    
    return(
        <Flex direction="row" align="center" justify="center" position="relative">
            <Image
                src="/images/logo.png"
                alt="logo-mczink"
            />
        </Flex>    
    );
}