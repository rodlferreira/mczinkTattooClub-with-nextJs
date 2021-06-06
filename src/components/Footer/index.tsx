import {
    Flex,
    Text,
    Box,
    Image,
    SimpleGrid,
    Stack,
    useBreakpointValue,
    HStack,
    Grid,
  } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
    return(
        <Flex align="center" justify="center" direction="column">
            <Grid bg="var(--gray-green-medium)" width="100%" height="500px">
                <Flex mt="13rem" ml="30px">
                    <Image src="/images/logo-branca-footer.png" alt="Logo  Footer Mczink" width="190px" height="190px"/>
                </Flex>
            </Grid>
        </Flex>
    );
}