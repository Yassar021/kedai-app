import { Box, Button, Checkbox, Flex, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"

const Menus = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)

    return(
        <Box>
            <Image w='240px' h='240px' src='/coffee.png' alt='Vanilla Latte' />
            <Flex justifyContent={'space-between'} mt='0px !important' w='240px' h={'60px'} px='10px' bgColor='#D9D9D9'>
                <Text mt='10px' fontSize={'18px'}>Vanilla Latte</Text>
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
                            <HStack spacing='10'>
                                <Checkbox colorScheme='green'>
                                    Hot
                                </Checkbox>
                                <Text fontWeight={'600'}>15K</Text>
                            </HStack>
                            <HStack spacing='10'>
                                <Checkbox colorScheme='green'>
                                    Ice
                                </Checkbox>
                                <Text fontWeight={'600'}>18K</Text>
                            </HStack>
                            <HStack spacing={'6'}>
                                <Text fontWeight={'600'}>Jumlah </Text>
                                <Input type='tel' placeholder='Masukkan disini' />
                            </HStack>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button bgColor={'#D84727'} color={'#fff'} mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button bgColor={'#042A2B'} color='#fff'>Masukkan Ke Keranjang</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Box>
    )
}

export default Menus