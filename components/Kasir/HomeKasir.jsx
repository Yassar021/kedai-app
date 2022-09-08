import axios from "@/../lib/axios"
import useSWR from "swr"

const { default: LayoutKasir } = require("@/../layout/LayoutKasir")
const { Flex, Text, SimpleGrid, Button } = require("@chakra-ui/react")
const { default: Link } = require("next/link")
const { default: Meja } = require("./Meja")

const HomeKasir = () => {
    const {data} = useSWR('/api/tables', () =>  axios.get('/api/tables').then(res => res.data));

    return (
        <LayoutKasir pageTitle={'Home'}>
            <Flex mb='40px' direction={'row'} justifyContent='space-between'>
                <Text fontSize={{base:'22px',md:'32px'}} fontWeight='600' color='#000'>Pilih Meja</Text>
                <Button colorScheme='red'>
                    <Link href='/ListMenuKasir'>
                        <Text fontSize={{base:'22px',md:'32px'}} fontWeight='400' color='#000'>List Menu</Text>
                    </Link>
                </Button>
                
            </Flex>

            <SimpleGrid columns={{base:2,md:2, lg:3}} spacing='20px'>
                {
                    data?.map((item, i) => <Meja key={i} linkMeja={`/DetailMeja/${item.id}`} noMeja={item.id} />)
                }
            </SimpleGrid>
        </LayoutKasir>
    )
}

export default HomeKasir