import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return(
        <button className="border-solid border-2 px-3 py-1 rounded-md">
            <span>
                <FontAwesomeIcon 
                    icon = {faBars}
                    size = "xl"
                />
            </span>
        </button>
    )
}

export default Navigation