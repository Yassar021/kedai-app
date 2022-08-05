import { Box } from "@chakra-ui/react"
import Head from "next/head"

const LayoutKasir = ({pageTitle,children}) => {
    return (
        <>
            <Head>
                <title>Kedai Kasir - {pageTitle}</title>
            </Head>

            <Box h={'100vh'} bgColor={'#fff'} py='40px' px={{base:'20px',md:'120px'}}>
                {children}
            </Box>
        </>
    )
}

export default LayoutKasir