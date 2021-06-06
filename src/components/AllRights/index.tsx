import React from 'react';
import { Flex, Box, Grid, Text, useBreakpointValue, Link } from "@chakra-ui/react";


export default function AllRights() {
    return(
        <Flex direction="column">
          <Grid direction="column" align="center" bg="#292929">
              
              <Text 
              color="#FFFFFF" 
              align="right" 
              margin="5px"
              position="relative"
              right="100px"
              > 
                  © Todos os direitos reservados - 2021 
              </Text>
  
              <Link 
              href="https://www.instagram.com/rodlferreira_dev/?hl=pt-br"
              isExternal
              color="#FFFFFF" 
              align="left" 
              position="absolute"
              margin="5px"
              left="50px"
              > 
                  Desenvolvido por Rodlferreira_dev 
              </Link>
              
          </Grid>
       </Flex>

    );
}

