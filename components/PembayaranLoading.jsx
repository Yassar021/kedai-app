import LayoutUser from "../layout/LayoutUser"
import {Center, Image,VStack, Text} from "@chakra-ui/react"

const PembayaranLoading = () => {
    return (
        <LayoutUser pageTitle={'Menunggu Verifikasi'}>
            <Center mb='40px'>
                <VStack spacing='20px'>
                    <Text align={'center'} fontSize={{base:'26px',md:'32px'}} fontWeight='600' color='#000'>Menunggu Verifikasi Kasir</Text>
                    <Text fontSize={{base:'26px',md:'32px'}} fontWeight='400' color='#000'>Silahkan Ke Kasir</Text>
                    <Image src='/loading.png' w='100%' h={{md:'auto',lg:'623.43px'}} alt='Loading Picture' />                    
                </VStack>
            </Center>
        </LayoutUser>
    )
}

export default PembayaranLoading 