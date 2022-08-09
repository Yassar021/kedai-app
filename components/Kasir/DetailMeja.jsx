import LayoutKasir from "../../layout/LayoutKasir";
import {Center, Flex, Text, Container, OrderedList,ListItem, List, Link, VStack,Button} from '@chakra-ui/react'

const DetailMeja = ({id}) => {
    return(
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
                        <ListItem>Vanilla Latte (Ice)</ListItem>
                        <ListItem>Nasi Goren</ListItem>
                        <ListItem>Air Mineral</ListItem>
                    </OrderedList>
                    <List spacing={2}>
                        <ListItem>15K</ListItem>
                        <ListItem>20K</ListItem>
                        <ListItem>7K</ListItem>
                    </List>
                </Flex>
                <Flex mt='20px' direction={'row'} justifyContent='space-between'>
                    <Text fontSize={'24px'} fontWeight='600' color={'#000'}>
                       Total
                    </Text>
                    <Text fontSize={'24px'} fontWeight='600' color={'#000'}>
                        42K
                    </Text>
                </Flex>
                <VStack mt='60px' spacing='20px'>
                    <Link href='/MetodePembayaran' _hover={{textDecor:'none'}}>
                        <Button
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
                    </Link>
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

export default DetailMeja