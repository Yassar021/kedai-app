import PembayaranSukses from "@/../components/PembayaranSukses";
import axios from "@/../lib/axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import useSWR from "swr"
import PembayaranLoading from "../../components/PembayaranLoading"

const PembayaranLoadingPage = () => {
    const router = useRouter();
    const {id} = router.query;
    const {data} = useSWR(`/api/transactions/${id}`, () => axios.get(`/api/transactions/${id}`).then(res => res.data));
    const [status, setStatus] = useState();

    useEffect(() => {
        setStatus(data);
    }, [data]);

    return (
        status?.status !== 'menunggu' ? <PembayaranSukses /> :  <PembayaranLoading />
    )
}

export default PembayaranLoadingPage