import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed z-40 w-full bg-black top-0 lg:border-b transition ease-in" id="nav">
        <div className="flex justify-between items-center max-w-screen-xl border-b lg:border-none bg-opacity-30 bg-transparent mx-auto px-4 lg:px-16 py-6">
            <a href="index.html" className="text-3xl font-extrabold text-white">Lawyer</a>
            <nav className="hidden lg:block duration-300 ease-in-out overflow-hidden">
                <ul className="lg:flex lg:space-x-4 font-medium text-white">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <a href="#" className="ml-auto lg:ml-0 text-white py-2 px-6 rounded-full bg-green-600 hover:bg-green-500 transition ease-in-out">Get Started</a>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div className={`content md:hidden bg-white fixed w-full top-20 py-8 bottom-0 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
            <a className="block text-center text-lg font-semibold pb-2" href="index.html">Home</a>
            <a className="block text-center text-lg font-semibold pb-2" href="#">About</a>
            <a className="block text-center text-lg font-semibold pb-2" href="#">Services</a>
            <a className="block text-center text-lg font-semibold pb-2" href="#">Portfolio</a>
            <a className="block text-center text-lg font-semibold pb-2" href="#">Pricing</a>
            <a className="block text-center text-lg font-semibold pb-2" href="#">Dropdown</a>
            <a className="block text-center text-lg font-semibold pb-2" href="#">Contact</a>
        </div>
    </div>
    );
};

export default Navbar;