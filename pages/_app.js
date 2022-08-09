// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from '../hooks/cart'
import { QRProvider } from '../hooks/qr'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <QRProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </QRProvider>
    </ChakraProvider>
  )
}

export default MyApp