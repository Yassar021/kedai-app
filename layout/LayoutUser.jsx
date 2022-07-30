import { Box } from "@chakra-ui/react"
import Head from "next/head"

const LayoutUser = ({pageTitle,children}) => {
    return (
        <>
            <Head>
                <title>Home - {pageTitle}</title>
            </Head>

            <Box bgColor={'#fff'} py='40px' px={{base:'20px',md:'120px'}}>
                {children}
            </Box>
        </>
    )   
}

export default LayoutUser