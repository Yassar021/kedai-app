import LayoutKasir from "../../layout/LayoutKasir"
import {Center, Text, SimpleGrid, Link,} from "@chakra-ui/react"
import Meja from "./Meja"

const HomeKasir = () => {
    return(
        <LayoutKasir pageTitle={'Home'}>
            <Center mb='40px'>
                <Text fontSize={{base:'26px',md:'32px'}} fontWeight='600' color='#000'>Pilih Meja</Text>
            </Center>

            <SimpleGrid columns={{base:2,md:2, lg:3}} spacing='20px'>
                <Meja linkMeja={'/DetailMeja'} noMeja={'1'} />
                <Meja linkMeja={'/'} noMeja={'2'} />
                <Meja linkMeja={'/'} noMeja={'3'} />
                <Meja linkMeja={'/'} noMeja={'4'} />
                <Meja linkMeja={'/'} noMeja={'5'} />
                <Meja linkMeja={'/'} noMeja={'6'} />
                <Meja linkMeja={'/'} noMeja={'7'} />
                <Meja linkMeja={'/'} noMeja={'8'} />
                <Meja linkMeja={'/'} noMeja={'9'} />
            </SimpleGrid>
        </LayoutKasir>

    )
}

export default HomeKasir