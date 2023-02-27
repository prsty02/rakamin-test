import { Link } from "react-router-dom"

const NavigationMenu = (props) => {
    return (
        <div>
            <ul className="py-3">
                <li className="p-3 border-b">
                    <Link to="/" onClick={props.close}>Home</Link>
                </li>
                <li className="p-3 border-b">
                    <Link to="about" onClick={props.close}>About</Link>
                </li>
                <li className="p-3 border-b">
                    <Link to="contact" onClick={props.close}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu