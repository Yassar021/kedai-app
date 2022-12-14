import { Box, Button, Center, Container, Flex, HStack, Image, Link, SimpleGrid, Stack, Text, textDecoration, VStack } from "@chakra-ui/react"
import { QR_TYPE, useDispatchQR, useQR } from "../hooks/qr"
import LayoutUser from "../layout/LayoutUser"

const HomeUser = () => {
    const qr = useQR();
    const dispatch = useDispatchQR();

    const handleReScan = () => 
        dispatch({type: QR_TYPE.REMOVE});

    return (
        <LayoutUser pageTitle={'Welcome'}>
            <Container maxW='4xl'>
                <Flex gap={{base:'20px',lg:'200px'}} justifyContent='center'>
                    <Box w='310px'>
                        <Button onClick={handleReScan} colorScheme='red'>Scan Ulang QR Code</Button>
                        <Text fontSize={{base:'21px',lg:'32px'}} fontWeight={'600'} color={'#000'}>Selamat Datang di Kedai Kilometer 17</Text>
                        <Text mt={'10px'} fontSize={{base:'18px',lg:'26px'}} fontWeight={'400'} color={'#000'}>Meja {qr}</Text>
                    </Box>
                    <Link href={'/KeranjangUser'} mx='auto'>
                        <Stack>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 16L16 14C16 9.58172 19.5817 6 24 6V6C28.4183 6 32 9.58172 32 14L32 16" stroke="#EF7B45" strokeWidth="2" strokeLinecap="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.58579 14.5858C6 15.1716 6 16.1144 6 18V36C6 39.7712 6 41.6569 7.17157 42.8284C8.34315 44 10.2288 44 14 44H34C37.7712 44 39.6569 44 40.8284 42.8284C42 41.6569 42 39.7712 42 36V18C42 16.1144 42 15.1716 41.4142 14.5858C40.8284 14 39.8856 14 38 14H10C8.11438 14 7.17157 14 6.58579 14.5858ZM19 24C19 23.4477 18.5523 23 18 23C17.4477 23 17 23.4477 17 24V28C17 28.5523 17.4477 29 18 29C18.5523 29 19 28.5523 19 28V24ZM31 24C31 23.4477 30.5523 23 30 23C29.4477 23 29 23.4477 29 24V28C29 28.5523 29.4477 29 30 29C30.5523 29 31 28.5523 31 28V24Z" fill="#EF7B45"/>
                            </svg>
                        </Stack>
                    </Link>
                </Flex>

                <Center mt='73px' mb='40px'>
                    <Text fontSize={{base:'20px',lg:'32px'}} fontWeight='500' color={'#042A2B'}>Silahkan Pilih Menu : </Text>
                </Center>

                <SimpleGrid columns={{base:1,md:2}} spacing='20px'>
                    <Link href='/ListMenusUser/coffee' _hover={{textDecoration:'none'}}>
                        <VStack>
                            <Image w='242px !important' h='240px'  src="/coffee.png" alt='Coffee' />
                            <Box mt='0px !important' w='242px' h='60px' bgColor='#D9D9D9'>
                                <Center>
                                    <Text mt='10px' fontSize={{base:'18px',lg:'24px'}} color={'#042A2B'}>Coffee</Text>
                                </Center>
                            </Box>
                        </VStack>
                    </Link>
                    <Link href='/ListMenusUser/tea' _hover={{textDecoration:'none'}}>
                        <VStack>
                            <Image w='242px' h='240px'  src="/tea.png" alt='Tea' />
                            <Box mt='0px !important' w='242px' h='60px' bgColor='#D9D9D9'>
                                <Center>
                                    <Text mt='10px' fontSize={{base:'18px',lg:'24px'}} color={'#042A2B'}>Tea</Text>
                                </Center>
                            </Box>
                        </VStack>
                    </Link>
                    <Link href='/ListMenusUser/milk' _hover={{textDecoration:'none'}}>
                        <VStack>
                            <Image w='242px' h='240px'  src="/milkshake.png" alt='Milk' />
                            <Box mt='0px !important' w='242px' h='60px' bgColor='#D9D9D9'>
                                <Center>
                                    <Text mt='10px' fontSize={{base:'18px',lg:'24px'}} color={'#042A2B'}>Milk</Text>
                                </Center>
                            </Box>
                        </VStack>
                    </Link>
                    <Link href='/ListMenusUser/food' _hover={{textDecoration:'none'}}>
                        <VStack>
                            <Image w='242px' h='240px'  src="/food.png" alt='Food' />
                            <Box mt='0px !important' w='242px' h='60px' bgColor='#D9D9D9'>
                                <Center>
                                    <Text mt='10px' fontSize={{base:'18px',lg:'24px'}} color={'#042A2B'}>Food</Text>
                                </Center>
                            </Box>
                        </VStack>
                    </Link>
                </SimpleGrid>
            </Container>
        </LayoutUser>
    )
}

export default HomeUser