import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, SimpleGrid, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import useSWR from "swr";
import LayoutKasir from "../layout/LayoutKasir";
import axios from "../lib/axios";

const ListMenuKasirPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const {data, mutate} = useSWR('/api/products', () =>  axios.get('/api/products').then(res => res.data));

    const [name, setName] = useState('');
    const [hotPrice, setHotPrice] = useState('');
    const [icePrice, setIcePrice] = useState('');
    const [category, setCategory] = useState('');
    const [picture, setPicture] = useState('');
    const [loading, setLoading] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState();
    const [stok, setStok] = useState(1); 

    const handleSubmit = async () => {
        setLoading({save:true});
        const formData = new FormData();
        formData.append('name', name);
        formData.append('hotPrice', hotPrice);
        formData.append('icePrice', icePrice);
        formData.append('category', category);
        formData.append('picture', picture);
        formData.append('stok', stok);
        const csrf = () => axios.get('/sanctum/csrf-cookie')
        try {
            await csrf();
            await axios.post('/api/products', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            mutate();
            setLoading();
            onClose();
        } catch (error) {
            setLoading()
        }
    }

    const handleEdit = (item) => {
        onOpen();
        setIsEdit(true);
        setName(item.name);
        setHotPrice(item.hotPrice);
        setIcePrice(item.icePrice);
        setCategory(item.category);
        setId(item.id);
        setStok(item.stok);
    }

    const handleEditSubmit = async () => {
        if(!id) return;
        setLoading({save:true});
        const formData = new FormData();
        formData.append('name', name);
        formData.append('hotPrice', hotPrice);
        formData.append('icePrice', icePrice);
        formData.append('category', category);
        formData.append('stok', stok);
        formData.append('_method', 'put');
        if (picture) formData.append('picture', picture);
        const csrf = () => axios.get('/sanctum/csrf-cookie')
        try {
            await csrf();
            await axios.post(`/api/products/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            mutate();
            setLoading();
            onClose();
        } catch (error) {
            setLoading()
        }
    }

    const deleteData = async (id) => {
        if (confirm('Apakah yakin hapus data ?')) {
            setLoading({delete:true});
            const csrf = () => axios.get('/sanctum/csrf-cookie')
            try {
                await csrf();
                await axios.delete(`/api/products/${id}`)
                mutate();
                setLoading();
            } catch (error) {
                setLoading()
            }
        }
    }

    const handleAddMenu = () => {
        setIsEdit(false);
        onOpen();
    }

    return(
        <LayoutKasir pageTitle={'List Menu'}>
            <Flex mb='40px' direction={'row'} justifyContent='space-between'>
                <Link href='/HomeKasir' _hover={{textDecor: 'none'}}>
                    <Text fontSize={{base:'18px',md:'24px'}} fontWeight='400' color='#000'>Kembali</Text>
                </Link>
                <Box>
                    <Button colorScheme={'linkedin'} onClick={handleAddMenu}>Tambah Menu</Button>
                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                            <ModalHeader>Tambah Menu</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Nama Produk</FormLabel>
                                    <Input ref={initialRef} type={'text'} />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Harga Hot</FormLabel>
                                    <Input type={'number'} />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Harga Cold</FormLabel>
                                    <Input type={'number'} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Kategori</FormLabel>
                                    <Select placeholder='Kategori'>
                                        <option>Coffee</option>
                                        <option>Milk</option>
                                        <option>Tea</option>
                                        <option>Food</option>
                                    </Select>
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Upload Foto Produk</FormLabel>
                                    <Input placeholder='foto-produk' type={'file'} />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3}>
                                Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                            </ModalContent>
                        </Modal>
                </Box>
            </Flex>
            
            <Text fontSize={{base:'26px',md:'32px'}} fontWeight='600' color='#000'>List Menu</Text>
        
            <SimpleGrid columns={{base:1,md:1}} spacing='20px' textColor={'#000'}>
                <Box>
                    {/* <Text fontSize={{base:'26px',md:'32px'}} fontWeight='600' color='#000'>Coffee</Text> */}
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Kategori</Th>
                                <Th>Harga</Th>
                                <Th>Foto Produk</Th>
                                <Th>Stok</Th>
                                <Th>Action</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            {
                                data?.map( (item, i) => (
                                    <Tr key={i}>
                                    <Td>{item.name}</Td>
                                    <Td>{item.category}</Td>
                                    <Td>{item.hotPrice} / {item.icePrice}</Td>
                                    <Td> 
                                        <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${item.picture}`} width='100px' height='100px' alt='' />
                                    </Td>
                                    <Td>{item.stok}</Td>
                                    <Td> 
                                        <VStack spacing='10px'>
                                            <Box>
                                                <Button width={'120px'} colorScheme={'linkedin'} onClick={() => handleEdit(item)}>Edit Menu</Button>
                                            </Box>
                                            <Box>
                                                <Button onClick={() => deleteData(item.id)} width={'120px'} colorScheme='red'>Delete</Button>
                                            </Box>
                                        </VStack>
                                    </Td>
                                    </Tr>
                                ))
                            }            
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>     
            </SimpleGrid>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{isEdit ? 'Edit' : 'Tambah'} Menu</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Nama Produk</FormLabel>
                        <Input value={name} onChange={(e) => setName(e.target.value)} type={'text'} />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Harga Hot</FormLabel>
                        <Input value={hotPrice} onChange={(e) => setHotPrice(e.target.value)} type={'number'} />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Harga Cold</FormLabel>
                        <Input value={icePrice} onChange={(e) => setIcePrice(e.target.value)} type={'number'} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Kategori</FormLabel>
                        <Select value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Kategori'>
                            <option value='coffee'>Coffee</option>
                            <option value='milk'>Milk</option>
                            <option value='tea'>Tea</option>
                            <option value='food'>Food</option>
                        </Select>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Stok Persediaan</FormLabel>
                        <Input value={stok} onChange={(e) => setStok(e.target.value)} type={'number'} />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Upload Foto Produk</FormLabel>
                        <Input onChange={(e) => setPicture(e.target.files[0])} placeholder='foto-produk' type={'file'} />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button isLoading={loading?.save} onClick={isEdit ? handleEditSubmit : handleSubmit} colorScheme='blue' mr={3}>
                    {isEdit ? 'Edit' :'Save'}
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>         
        </LayoutKasir>
    )
}

export default ListMenuKasirPage