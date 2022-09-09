import DetailMeja from "@/../components/Kasir/DetailMeja"
import LayoutKasir from "@/../layout/LayoutKasir";
import axios from "@/../lib/axios";
import { Button, Center, Container, Flex, List, ListItem, OrderedList, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import useSWR from "swr";

const DetailMejaKasir = () => {
    const router = useRouter();
    const {id} = router.query;
    const {data} = useSWR(`/api/transaction/${id}`, () => axios.get(`/api/transaction/${id}`).then(res => res.data));
    const [cart, setCart] = useState([]);

    const handleCart = async () => {
        if(data) {
            const res = await axios.put(`/api/transactions/${data.id}`,{
                status: 'selesai',
            });
            router.replace(`/PembayaranLoading/${res.data.id}`);
        }
    }

    useEffect(() => {
        if(data) setCart(JSON.parse(data.item));
    }, [data]);

    return (
        <LayoutKasir pageTitle={'Detail Meja'}>
            <Center mb='40px'>
                <Text fontSize={{base:'26px',md:'32px'}} fontWeight='600' color='#000'>Keranjang Pesanan</Text>
            </Center>
            <Container maxW={'2xl'}>
                <Flex direction={'row'} justifyContent='space-between'>
                    <Text fontSize={'24px'} fontWeight='500' color={'#000'}>
                        List Pesanan
                    </Text>
                    <Text fontSize={'24px'} fontWeight='500' color={'#000'}>
                        Harga
                    </Text>
                </Flex>
                <Flex my='20px' direction={'row'} justifyContent='space-between' color={'#042A2B'}>
                    <OrderedList spacing={2}>
                        {
                            cart?.map((item, i) => <ListItem key={i}>{item.name} x {item.total} {item.note?`(${item.note})`: '' }</ListItem> )
                        }
                    </OrderedList>
                    <List spacing={2}>
                        {
                            cart?.map((item, i) => <ListItem key={i}>{(item.price * item.total).toLocaleString()}</ListItem> )
                        }
                    </List>
                </Flex>
                <Flex mt='20px' direction={'row'} justifyContent='space-between'>
                    <Text fontSize={'24px'} fontWeight='600' color={'#000'}>
                       Total
                    </Text>
                    <Text fontSize={'24px'} fontWeight='600' color={'#000'}>
                        {
                            cart?.reduce((total, i) => total + (i.price * i.total), 0).toLocaleString()
                        }
                    </Text>
                </Flex>
                <VStack mt='60px' spacing='20px'>
                    <Button
                        onClick={handleCart}
                        size='md'
                        height='50px'
                        width='240px'
                        bgColor={'#5EB1BF'}
                        color='#fff'
                        fontSize={'18px'}
                        fontWeight='400'
                        _hover={{ bg: '#5EB1BF' }}
                        _active={{
                            bg: '#5EB1BF',
                            transform: 'scale(0.98)'
                        }}
                        >
                        Verifikasi Pembayaran
                    </Button>
                    <Link href='/HomeKasir' _hover={{textDecor:'none'}}>
                        <Button
                            size='md'
                            height='50px'
                            width='240px'
                            bgColor={'#042A2B'}
                            color='#fff'
                            fontSize={'18px'}
                            fontWeight='400'
                            _hover={{ bg: '#042A2B' }}
                            _active={{
                                bg: '#042A2B',
                                transform: 'scale(0.98)'
                            }}
                            >
                            Kembali Pilih Meja
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </LayoutKasir>
    )
}

export default DetailMejaKasir