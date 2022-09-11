import Menus from "@/../components/Menus";
import LayoutUser from "@/../layout/LayoutUser";
import axios from "@/../lib/axios";
import { Container, Flex, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const ListMenusUser = () => {
    const router = useRouter();
    const {category} = router.query;
    const {data} = useSWR(`/api/products?category=${category}`, () => axios.get(`/api/products?category=${category}`).then(res => res.data));

    return (
        <LayoutUser pageTitle={'List Menus'}>
            <Container maxW='4xl'>
                <Flex  direction={{base:'column',md:'row'}} gap="73px">
                    <Link href='/' _hover={{textDecor:'none'}}>
                        <HStack spacing='10px'>
                            <Stack>
                                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 24L9.29289 23.2929L8.58579 24L9.29289 24.7071L10 24ZM34 25C34.5523 25 35 24.5523 35 24C35 23.4477 34.5523 23 34 23V25ZM17.2929 15.2929L9.29289 23.2929L10.7071 24.7071L18.7071 16.7071L17.2929 15.2929ZM9.29289 24.7071L17.2929 32.7071L18.7071 31.2929L10.7071 23.2929L9.29289 24.7071ZM10 25H34V23H10V25Z" fill="#333333"/>
                                </svg>
                            </Stack>
                            <Text fontSize={'18px'} fontWeight='500' color={'#042A2B'}>Kembali</Text>
                        </HStack>
                    </Link>
                    <Text textTransform='capitalize' fontSize={'26px'} fontWeight='600' color={'#042A2B'}>{category}</Text>
                </Flex>

                <SimpleGrid mt='40px' columns={{base:1, md:2}} spacing='20px'>
                    {
                        data?.map((item, i) => <Menus category={category} key={i} item={item} />)
                    }
                </SimpleGrid>
            </Container>
        </LayoutUser>
    );
}

export default ListMenusUser