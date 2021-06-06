import React from 'react';

import { 
Grid, 
Image, 
Box 
        } from "@chakra-ui/react"

import { Link } from "@chakra-ui/react"

import { ExternalLinkIcon } from '@chakra-ui/icons'


export default function SocialMedia() {
    return(
        <>

            <Grid>
                <Box 
                    mt="2rem" 
                    align="center" 
                    direction="column" 
                    spacing={4}
                >
                    <Link href="https://www.instagram.com/mczinktattooclub/" 
                          isExternal
                    >

                        <Image
                            size="sm"
                            height="30%"
                            src="/images/instagram.png"
                            alt="logo-mczink"
                        />
                    </Link>
                </Box>




                <Box 
                    mt="2.5rem" 
                    align="center" 
                    direction="column" 
                    spacing={4} 
                    position="absolute" 
                    ml="15rem"
                >

                    <Link href="https://wa.link/kn4wbk" isExternal>
                        <Image
                            height="130px"
                            src="/images/whatsapp.png"
                            alt="logo-mczink"
                        />
                    </Link>
                </Box>




                <Box 
                    mt="3rem" 
                    align="center" 
                    direction="column" 
                    spacing={4} 
                    position="absolute" 
                    ml="59rem"
                >

                    <Link href="https://pt-br.facebook.com" isExternal>
                        <Image
                            size="sm"
                            height="120px"
                            src="/images/facebook.png"
                            alt="logo-mczink"
                        />
                    </Link>
                </Box>

            </Grid>
     </>

    );
}