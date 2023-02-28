import { Link } from "react-router-dom"

const Card = (props) => {
    return(
        <Link to={`product/${props.data.id}`}>
            <div className="border rounded-xl p-3">
                <div className="">
                    <img
                        className="w-full object-cover rounded-xl"
                        src={props.data.image}
                        alt={props.data.name}
                    />
                </div>
                <div className="pt-2">
                    <h3 className="font-bold">{props.data.name}</h3>
                    <h3>${props.data.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card