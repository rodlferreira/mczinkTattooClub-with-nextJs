import { Image, Grid, Flex, Box, Text, Button, Stack, ButtonGroup} from "@chakra-ui/react"
import React from "react";

export default function Team() {
    return(
        <Grid mt="3rem">

            <Stack position="absolute" ml="40rem" justify="center" marginTop="-0.75rem">
                <Text fontSize="45">
                    Team
                </Text>
            </Stack>
            
            <Grid>
                <Flex>
                <Image 
                    boxSize="13.5rem"
                    src="/images/yrlan.jpg"
                    alt="Yrlan Lins" 
                    margin="0.5rem"
                />
                </Flex>
                <Flex>
                   <Box
                    mt="0.5rem" 
                    justify="center" 
                    align="center" 
                    ml="4.5rem"
                   >
                    <Text 
                      size="xs" 
                      textAlign="center"
                    >
                      Yrlan Lins
                    </Text>

                    </Box>

                    <Stack 
                      mt="2.5rem" 
                      justify="center" 
                      ml="2rem" 
                      position="absolute"
                    >
                      <Button
                       backgroundColor="var(--body)" 
                       color="var(--white)" 
                       variant="link" 
                      >
                        American traditional
                      </Button>

                    </Stack>

                </Flex>
                
            </Grid>










            <Grid position="absolute" ml="14rem">
                <Flex>
                <Image
                    boxSize="13.5rem"
                    src="/images/yrlan.jpg"
                    alt="Yrlan Lins" 
                    margin="0.5rem"

                />
                </Flex>
                <Flex>
                   <Box
                    mt="0.5rem" 
                    justify="center" 
                    align="center" 
                    ml="4.5rem"
                   >
                    <Text 
                      size="xs" 
                      textAlign="center"
                    >
                      Yrlan Lins
                    </Text>

                    </Box>

                    <Stack 
                      mt="2.5rem" 
                      justify="center" 
                      ml="2rem" 
                      position="absolute"
                    >
                      <Button
                       backgroundColor="var(--body)" 
                       color="var(--white)" 
                       variant="link" 
                      >
                        American traditional
                      </Button>

                    </Stack>

                </Flex>
                
            </Grid>

        </Grid>

    );
}