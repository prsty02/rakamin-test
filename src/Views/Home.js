import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Components/Card"
import Error from "../Components/Error"
import Loader from "../Components/Loader"

const Home = () => {
    const url = "https://63fda4a1cd13ced3d7bb827e.mockapi.io/api/product/item?page=1&limit=10"
    const [items, setItems] = useState({
        data : null,
        loading : true,
        error : false
    })

    let content = <h1>No data</h1>

    useEffect(() => {
        axios.get(url).then(
            response => {
            setItems({
                data : response.data,
                loading : false,
                error : false
            })
    
        }).catch(() => {
            setItems({
                data : null,
                loading : false,
                error : true
            })
        })
    }, [])

    if (items.error) {
        content = 
        <div className="col-span-2 flex flex-col items-center w-full h-full">
            <Error />
        </div>
    }

    if (items.loading) {
        content = 
            <div className="col-span-2 flex flex-col items-center w-5/6 h-full">
                <Loader />
            </div>
    }

    if (items.data) {
        content = items.data.map((item) =>
            <div key={item.id}>
                <Card data={item} />
            </div>
        )
    }

    return(
        <div className="lg:px-48 md:px-20">
            <h1 className="font-bold text-2xl py-5 px-2">Best Seller Product</h1>
            <div className="flex grid md:grid-cols-2 grid-cols-1 gap-4 pb-4 ">
                {content}
            </div>

        </div>
    )
}

export default Home