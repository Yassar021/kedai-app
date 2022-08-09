import {Box,Text,Link,} from '@chakra-ui/react'

const Meja = ({noMeja, linkMeja}) => {
    return (
        <Link href={linkMeja} _hover={{textDecor: 'none'}}>
            <Box w={{base:'100px',md:'250px'}} h={{base:'100px',md:'250px'}} bgColor='#5EB1BF'>
                <Text align={'center'} fontSize={{base:'18px',md:'32px'}} fontWeight='600' color='#000'>{noMeja}</Text>
            </Box>
        </Link>
    )
}

export default Meja