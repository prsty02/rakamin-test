import axios from "axios"
import { useEffect, useState } from "react"

const useAxiosGet = (url) => {
    const [request, setRequest] = useState({
        data : null,
        loading : true,
        error : false
    })

    useEffect(() => {
        axios.get(url).then(
            response => {
            setRequest({
                data : response.data,
                loading : false,
                error : false
            })
    
        }).catch(() => {
            setRequest({
                data : null,
                loading : false,
                error : true
            })
        })
    }, [url])

    return request
}

export default useAxiosGet