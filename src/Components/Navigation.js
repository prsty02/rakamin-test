import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import NavigationMenu from './NavigationMenu';
import { Transition } from '@headlessui/react';


const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

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
            <Transition show={showMenu}>
                {/* Background overlay */}
                <Transition.Child
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className='fixed bg-black-t-50 top-0 left-0 h-full w-full z-50' onClick={() => setShowMenu(false)}/>
                </Transition.Child>

                {/* Sliding sidebar */}
                <Transition.Child
                    className="fixed top-0 left-0  bg-white shadow w-3/4 h-full md:w-1/3 p-3 z-50"
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className=''>
                        <div className='p-3 border-b'>AppName</div>
                        <NavigationMenu close={() => setShowMenu(false)} />
                    </div>
                </Transition.Child>
            </Transition>
        </nav>
    );
}

export default Navigation