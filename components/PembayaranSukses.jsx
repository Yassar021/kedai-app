import LayoutUser from "../layout/LayoutUser"
import {Center,Link,Button, Image,VStack, Text} from "@chakra-ui/react"

const PembayaranSukses = () => {
    return (
        <LayoutUser pageTitle={'Verifikasi Sukses'}>
            <Center mb='40px'>
                <VStack spacing='20px'>
                    <Text align={'center'} fontSize={{base:'26px',md:'32px'}} fontWeight='600' color='#000'>Pembayaran Sukses</Text>
                    <Image src='/success.png' w='100%' h={{md:'auto',lg:'623.43px'}} alt='Loading Picture' />
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
            </Center>
        </LayoutUser>
    )
}

export default PembayaranSukses 