import Head from "next/head"
import {Box} from "@chakra-ui/react"
import HomeUser from "../components/HomeUser"
import HomeKasir from "../components/Kasir/HomeKasir"
import ScanBarcode from "../components/ScanBarcode"

const Index = () => {
  return (
    <>
      <ScanBarcode />
    </>
  )
}

export default Index