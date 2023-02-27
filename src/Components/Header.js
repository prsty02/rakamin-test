import Navigation from "./Navigation"

const Header = () => {
    return(
        <header className="p-3 border-b flex justify-between items-center">
            <span className="font-bold">AppName</span>
            <Navigation />
        </header>
    );
}

export default Header