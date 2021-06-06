import { Button, ButtonGroup, Stack, Box, Grid } from "@chakra-ui/react"

export default function ButtonSeeMore() {
    return(
        <Box 
            direction="row" 
            spacing={4} 
            align="center" 
            mt="22rem" 
            justify="center" 
            alignContent="center"
        >

            <Button 
                backgroundColor="var(--green-mczink)" 
                color="var(--white)"
                borderRadius="6px"
                size="lg"
                transition="0.5s"
                _hover={{ bg: "var(--gray-green)" }}
                spacing={4}
                height="26px"
                width="70px"
            >
                Ver mais
            </Button>
  
        </Box>
    );
}