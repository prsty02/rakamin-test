import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Error from "../Components/Error"
import Loader from "../Components/Loader"

const Product = () => {
    const { id } = useParams()
    const url = `https://63fda4a1cd13ced3d7bb827e.mockapi.io/api/product/item/${ id }`
    const [item, setItem] = useState({
        data : null,
        loading : true,
        error : false
    })

    let content = <h1>No data</h1>

    useEffect(() => {
        axios.get(url).then(
            response => {
            setItem({
                data : response.data,
                loading : false,
                error : false
            })
    
        }).catch(() => {
            setItem({
                data : null,
                loading : false,
                error : true
            })
        })
    }, [url])

    if (item.error) {
        content = 
        <div className="flex flex-col items-center w-5/6 h-full">
            <Error />
        </div>
    }

    if (item.loading) {
        content = 
            <div className="flex flex-col items-center w-5/6 h-full">
                <Loader type="card" />
            </div>
    }

    if (item.data) {
        content = 
            <div className="flex flex-col md:flex-row items-center w-5/6 h-max">
                <div className="w-full md:w-1/2">
                    <img
                        className="w-full object-cover rounded-xl"
                        src={item.data.image}
                        alt={item.data.name}
                    />
                </div>
                <div className=" w-full md:w-1/2 h-full p-5 flex flex-col justify-start">
                    <Link to={".."} className="w-full flex justify-end">
                        <FontAwesomeIcon
                            icon={faArrowAltCircleLeft}
                            size="xl"
                        />
                    </Link>
                    <h2 className="text-xl pb-3 font-bold">
                        {item.data.name}
                    </h2>
                    <div>
                        Price : ${item.data.price}
                    </div>
                    <div className="w-full border-t">
                        <h3>Description :</h3>
                            {item.data.description}
                    </div>
                </div>
            </div>
    }
    return(
        <div className="flex flex-col items-center py-4 h-5/6">
            {content}
        </div>
    )
}

export default Product