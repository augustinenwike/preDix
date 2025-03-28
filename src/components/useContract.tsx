import {useReadContract} from 'wagmi'
import { useEffect, useState } from 'react'
import Abi from "../components/Abi.json"


export const useReadAppContract = (functionName: string, args: unknown[] = []) => {
    const [isMounted, setIsMounted] = useState(false)

    const CONTRACT_ADDRESS = '0x1388E0d9E5e25c4442F4bFAFAa990759Dd065224';

    const result = useReadContract({
        abi:Abi,
        address:CONTRACT_ADDRESS,
        functionName,
        args
    })

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return {data:null, loading:true, error:null}
    }

    return {
        data: result.data,
        loading: result.isLoading,
        error: result.error
    }
}