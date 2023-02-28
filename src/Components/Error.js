import { faDizzy } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Error = () => {
    return(
        <div className="flex flex-col h-full justify-center items-center">
            <FontAwesomeIcon
                className="p-3"
                icon={faDizzy}
                size="7x"
            />
            <h3 className="pt-3 font-bold">Something wrong happen</h3>
            <h3 className="pt-3 font-bold">Try again later</h3>
        </div>
    )
}

export default Error