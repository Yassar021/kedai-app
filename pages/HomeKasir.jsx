import { Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import useSWR from "swr";
import Meja from "../components/Kasir/Meja";
import LayoutKasir from "../layout/LayoutKasir";
import axios from "../lib/axios";

const HomeKasirPage = () => {
    const {data} = useSWR('/api/tables', () =>  axios.get('/api/tables').then(res => res.data));

    return (
        <LayoutKasir pageTitle={'Home'}>
            <Flex mb='40px' direction={'row'} justifyContent='space-between'>
                <Text fontSize={{base:'22px',md:'32px'}} fontWeight='400' color='#000'>Pilih Meja</Text>
                <Button colorScheme='cyan'>
                    <Link href='/ListMenuKasir'>
                        <Text fontSize={{base:'22px',md:'32px'}} fontWeight='500' color='#fff'>List Menu</Text>
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

export default HomeKasirPage