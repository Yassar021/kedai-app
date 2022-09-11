import { Box, Button, Checkbox, Flex, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { CART_TYPE, useDispatchCart } from "../hooks/cart"

const Menus = ({item, category}) => {
    const dispatch = useDispatchCart();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = useRef(null);
    const [ice, setIce] = useState(false);
    const [hot, setHot] = useState(false);
    const [total, setTotal] = useState(1);
    const [note, setNote] = useState('');

    const handleCart = () => {
        dispatch({
            type: CART_TYPE.SET,
            payload: {
                id: item.id,
                name: `${item.name}(${ice ? category==='food' ? 'special' : 'ice' : ''}${hot ? category==='food' ? 'biasa' : 'hot' : ''})`,
                total,
                price: ice ? item.icePrice : hot ? item.hotPrice : 0,
                note,
            },
        });
        setHot(false);
        setIce(false);
        onClose();
    }

    return(
        <Box>
            <Image w='240px' h='240px' src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${item.picture}`} alt='Vanilla Latte' />
            <Flex justifyContent={'space-between'} mt='0px !important' w='240px' h={'60px'} px='10px' bgColor='#D9D9D9'>
                <Text mt='10px' fontSize={'18px'} color={'#042A2B'}>{item?.name}</Text>
                <Button mt='10px' onClick={onOpen}>
                    <Stack>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6L12 18" stroke="#333333" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M18 12L6 12" stroke="#333333" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </Stack>
                </Button>
                <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Pilih : </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={'20px'} direction='column'>
                            {
                                (item?.hotPrice != 0 ) && (
                                    <HStack spacing='10'>
                                        <Checkbox onChange={() => setHot(!hot)} colorScheme='green'>
                                            {category==='food'?'Biasa':'Hot'}
                                        </Checkbox>
                                        <Text fontWeight={'600'}>{item?.hotPrice.toLocaleString()}</Text>
                                    </HStack>
                                )
                            }
                            {
                                (item?.icePrice != 0) && (
                                    <HStack spacing='10'>
                                        <Checkbox onChange={() => setIce(!ice)} colorScheme='green'>
                                            {category==='food'?'Special':'Ice'}
                                        </Checkbox>
                                        <Text fontWeight={'600'}>{item?.icePrice.toLocaleString()}</Text>
                                    </HStack>
                                )
                            }
                            <HStack spacing={'6'}>
                                <Text fontWeight={'600'}>Jumlah </Text>
                                <Input value={total} onChange={(e) => setTotal(e.target.value)} type='tel' placeholder='Masukkan disini' />
                            </HStack>

                            <HStack spacing={'6'}>
                                <Text fontWeight={'600'}>Note </Text>
                                <Input value={note} onChange={(e) => setNote(e.target.value)} type='text' placeholder='' />
                            </HStack>
                            <HStack spacing={'6'} mt='10px'>
                                <Text fontWeight={'600'}>Sisa Persediaan : {item?.stok}</Text>
                            </HStack>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button bgColor={'#D84727'} color={'#fff'} mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button 
                            onClick={handleCart}
                            bgColor={'#042A2B'}
                            color='#fff'
                            _hover={{ bg: '#042A2B' }}
                            _active={{
                                bg: '#042A2B',
                                transform: 'scale(0.98)'
                            }}
                            >
                                Masuk Keranjang
                        </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Box>
    )
}

export default Menus