
const Navbar = () => {
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
            <button className="toggle-button block lg:hidden focus:outline-none ml-4">
                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        {/* <!-- mobile menu --> */}
        <div className="content hidden space-y-4 font-medium text-white p-4">
            <a className="block text-center" href="index.html">Home</a>
            <a className="block text-center" href="#">About</a>
            <a className="block text-center" href="#">Services</a>
            <a className="block text-center" href="#">Portfolio</a>
            <a className="block text-center" href="#">Pricing</a>
            <a className="block text-center" href="#">Dropdown</a>
            <a className="block text-center" href="#">Contact</a>
        </div>
    </div>
    );
};

export default Navbar;