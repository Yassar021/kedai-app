import { Box, Button, Center, Container, Divider, Flex, Link, List, ListItem, OrderedList, Stack, Text, VStack } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { CART_TYPE, useCart, useDispatchCart } from "../hooks/cart";
import { useQR } from "../hooks/qr";
import LayoutUser from "../layout/LayoutUser"
import axios from "../lib/axios";

const KeranjangUser = () => {
    const router = useRouter();
    const cart = useCart();
    const dispatch = useDispatchCart();
    const qr = useQR();

    const handleCheckout = async () => {
        if(qr && cart) {
            const {data} = await axios.post('/api/transactions',{
                status: 'menunggu',
                table_id: qr,
                item: JSON.stringify(cart),
            });
            dispatch({
                type: CART_TYPE.REMOVE,
            });
            router.replace(`/PembayaranLoading/${data.id}`);
        }
    }

    return(
        <LayoutUser pageTitle={'Keranjang Pesanan'}>
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
                        onClick={handleCheckout}
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
                        Checkout Sekarang
                    </Button>
                    <Link href='/' _hover={{textDecor:'none'}}>
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
                            Kembali Ke Menu
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </LayoutUser>
    )
}

export default KeranjangUser