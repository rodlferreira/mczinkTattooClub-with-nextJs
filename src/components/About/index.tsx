import { Text, Flex, Grid, Box, GridItem } from "@chakra-ui/react"
import React from "react";

export default function About() {
    return (
        
        <Grid 
            align="center" 
            templateColumns="repeat(2, 1fr)" 
            gap={6} 
            marginLeft="4rem" 
            marginRight="4rem"
            mt="-60"
            >

            <GridItem colSpan={1}>
                <Box>
                    <Text textAlign="center">
                    Inaugurada em 2014, a MCZ Ink Tattoo Club, 
                    surgiu com o propósito de oferecer a seus 
                    clientes não só um serviço de qualidade como 
                    também proporcionar a eles um momento único. 
                    O objetivo é superar as expectativas através 
                    de muita dedicação e empenho. Hoje nossa maior 
                    vitória é ter conquistando a confiança dos nossos 
                    clientes como fruto de um trabalho marcado com 
                    muito profissionalismo e responsabilidade.
                    </Text>
                </Box>
            </GridItem>

            <GridItem colStart={2}>
                <Box>
                    <Text textAlign="center">
                    Temos como missão continuar evoluindo e 
                    dando o nosso melhor sempre. Nos orgulhamos
                    da nossa história e temos uma enorme gratidão 
                    a todos que ajudaram e ajudam a construí-la, 
                    pois não somos apenas um estúdio de tatuagem, 
                    somos um Tattoo Club e sem dúvidas estamos 
                    prontos para recebê-los em nossa casa e 
                    compartilhar dessa experiência.
                    </Text>
                </Box>
            </GridItem>

        </Grid>
    );
}