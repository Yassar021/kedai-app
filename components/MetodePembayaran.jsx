import { Box, Button, Center, Checkbox, Container, Divider, Flex, HStack, Link, List, ListItem, OrderedList, Stack, Text, VStack } from "@chakra-ui/react"
import LayoutUser from "../layout/LayoutUser"

const MetodePembayaran = () => {
    return(
        <LayoutUser pageTitle={'Metode Pembayaran'}>
            <Center mb='40px'>
                <Text fontSize={{base:'26px',md:'32px'}} fontWeight='600' color='#000'>Pilih Metode Pembayaran</Text>
            </Center>
            <Container maxW={'2xl'}>
                <Center>
                    <Stack spacing={'20px'} direction='column'>
                        <Checkbox colorScheme='blue'>
                            <Text fontSize={'18px'} fontWeight='600' ml='28px'>Bayar di Kasir</Text>
                        </Checkbox>
                        <Checkbox colorScheme='blue'>
                            <Text fontSize={'18px'} fontWeight='600' ml='28px'>Bayar dengan Dompet Digital</Text>
                        </Checkbox>                        
                    </Stack>
                </Center>
                <VStack mt='60px' spacing='20px'>
                    <Link href='#' _hover={{textDecor:'none'}}>
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
                            Checkout Sekarang
                        </Button>
                    </Link>
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

export default MetodePembayaran