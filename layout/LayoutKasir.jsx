import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"

const LayoutKasir = ({pageTitle,children}) => {
    return (
        <>
            <Head>
                <title>Kedai Kasir - {pageTitle}</title>
            </Head>

            <Box bgColor={'#fff'} py='40px' px={{base:'20px',md:'120px'}}>
                <Container maxW='4xl'>
                    {children}
                </Container>
            </Box>
        </>
    )
}

export default LayoutKasir