import { Box, Center, Container, Text, VStack } from "@chakra-ui/react"
import LayoutUser from "../layout/LayoutUser"

import React from 'react';
import { QrReader } from 'react-qr-reader';

const ScanBarcode = ({data, setData}) => {
    return (
        <LayoutUser pageTitle={'Scan Barcode'}>
            <Container maxW='2xl' textAlign={'center'}>
                <VStack spacing='40px'>
                    <Text fontSize={{base:'26px',md:'32px'}} fontWeight='600' color='#000'>Selamat Datang Di Kedai Kilometer 17</Text>
                    <Text fontSize={{base:'22px',md:'26px'}} fontWeight='400' color='#000'>Silahkan Scan Barcode di Meja Anda</Text>

                    <Box>
                    <QrReader
                      onResult={(result) => {
                        if (result) {
                          setData(result?.text);
                        }
                      }}
                      style={{ width: '100%' }}
                    />
                    <p>{data}</p>
                    </Box>
                </VStack>
            </Container>
        </LayoutUser> 
    )   
}

export default ScanBarcode