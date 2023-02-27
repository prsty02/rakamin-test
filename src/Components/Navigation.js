import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import NavigationMenu from './NavigationMenu';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    let menu;
    let menuLayer; 

    if (showMenu) {
        menu = <div className='fixed bg-white shadow top-0 left-0 w-3/4 h-full lg:w-1/3 p-3 z-50'>
            <div className='p-3 border-b'>AppName</div>
            <NavigationMenu close={() => setShowMenu(false)} />
        </div>

        menuLayer = <div className='fixed bg-black-t-50 top-0 left-0 h-full w-full z-50' onClick={() => setShowMenu(false)}/>
    }

    

    return(
        <nav>
            <button className="border-solid border-2 px-3 py-1 rounded-md" onClick={() => setShowMenu(!showMenu)}>
                <span>
                    <FontAwesomeIcon 
                        icon = {faBars}
                        size = "xl"
                    />
                </span>
            </button>   
            {menuLayer}
            {menu}
        </nav>
    );
}

export default Navigation