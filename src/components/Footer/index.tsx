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
    Link
  } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
    return(
        <Flex 
            align="center" 
            justify="center" 
            direction="column"
        >
            <Grid 
                bg="var(--gray-green-medium)" 
                width="100%" 
                height="500px"
            >
                <Text mt="16.75rem" position="absolute" ml="50rem" fontSize="21" as="u">Eventos</Text>
                <Text mt="16.75rem" position="absolute" ml="60rem" fontSize="21" as="u">Parcerias</Text>
                <Text mt="16.75rem" position="absolute" ml="70rem" fontSize="21" as="u">Avaliações</Text>


                <Flex 
                    mt="13rem" 
                    ml="30px"
                >
                    <Image 
                        src="/images/logo-branca-footer.png" 
                        alt="Logo  Footer Mczink" 
                        width="190px" 
                        height="190px"
                    />

                </Flex>
            </Grid>
        </Flex>
    );
}