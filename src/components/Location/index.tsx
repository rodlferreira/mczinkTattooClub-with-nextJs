import React from 'react';

import { Flex, Image, Stack, Text, Grid, Box, AspectRatio } from "@chakra-ui/react"

export function Location() {
    return(
        <Flex
        mt="-15rem" 
        content="center" 
        bg="#eedea4" 
        borderRadius="50px" 
        width="90%" 
        height="400px" 
        align="center" 
        alignContent="center" 
        marginLeft="70px"
        position="absolute"
        >


<Box 
                width="430px" 
                marginLeft="30px"
            >
            <AspectRatio ratio={4/3}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.6580797172822!2d-35.70982698421324!3d-9.65841463792062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145aebffaaaab%3A0x215aec5772f2771a!2sMCZ%20INK!5e0!3m2!1spt-BR!2sbr!4v1622993381467!5m2!1spt-BR!2sbr" width="400" height="300" loading="lazy"></iframe>
            </AspectRatio>

            <Grid 
                align="center" 
                marginLeft="470px"
                position="absolute" 
                mt="-320px" 
                width="10%"
            >
                <Flex align="center">
                    <Stack>

                        <Text
                            color="var(--dark)"
                            marginBottom="10px"
                            fontSize="4xl"
                            ml="25px"
                         >
                             Localização
                         </Text>

                    </Stack>
                </Flex>
            </Grid>

            <Grid
                align="center"
                marginLeft="470px" 
                position="absolute" 
                mt="-220px" 
                width="10%"
             >
                <Flex align="center">
                    <Stack>
                        <Text 
                          color="var(--dark)" 
                          marginBottom="10px" 
                        >
                            R. Sen. Rui Palmeira, 46 - Ponta Verde,
                        </Text>

                        <Text
                         color="var(--dark)"
                        >
                            Maceió - AL
                        </Text>

                        <Text
                         color="var(--dark)"
                        >
                            57035-250
                        </Text>

                    </Stack>
                </Flex>
            </Grid>
            <Box 
                bg="var(--khaki-sub)" 
                position="absolute" 
                width="1" 
                height="250px" 
                marginLeft="800px" 
                mt="-280px"
            >
                <Text color="var(--khaki-sub)">.</Text>
            </Box>

            <Grid 
                align="center"
                right="160px" 
                position="absolute" 
                mt="-320px" 
                width="10%"
            >
                <Flex align="center">
                    <Stack>
                        <Text
                         color="var(--dark)" 
                         marginBottom="10px" 
                         fontSize="4xl"
                         ml="40px"
                         >
                             Contato
                         </Text>
                    </Stack>
                </Flex>
            </Grid>

            <Grid 
                align="center" 
                right="150px" 
                position="absolute" 
                mt="-220px" 
                width="10%"
            >
                <Flex align="center">
                    <Stack>
                        <Text
                         color="var(--dark)" 
                         marginBottom="10px" 
                        >
                            Celular: +55 (82) 99801-7415
                        </Text>

                        <Text
                         color="var(--dark)"
                        >
                            Fixo: +55 (82) 3436-6006
                        </Text>

                    </Stack>
                </Flex>
            </Grid>
            </Box>

        </Flex>
    );
}
