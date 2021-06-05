import { Image, Grid, Flex, Box, Text, Button, Stack, ButtonGroup } from "@chakra-ui/react"
import React from "react";

export default function Team() {
    return(
        <Box>
            <Grid>
                <Image 
                    boxSize="13.5rem"
                    src="/images/yrlan.jpg"
                    alt="Yrlan Lins" 
                />
                <Flex>
                    <Text variant="link" size="xs">
                        Yrlan Lins
                    </Text>
                </Flex>

                <Box>
                    <Button backgroundColor="var(--body)" color="var(--white)" variant="link" > American traditional</Button>
                </Box>
                
            </Grid>
        </Box>
    );
}