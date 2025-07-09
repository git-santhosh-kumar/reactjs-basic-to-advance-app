export default function Header() {
    function toggleMobileView() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    }

    return (
        <header className="header-wrapper bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                <div className="flex items-center">
                    <span className="text-xl font-bold">MyCompany</span>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">About</a>
                    <a href="#" className="hover:text-gray-300">Services</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </nav>
                <div className="md:hidden">
                    {/* Mobile Menu Button */}
                    <button id="mobile-menu-button" className="focus:outline-none" onClick={toggleMobileView}>
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className="md:hidden hidden px-4 pb-4">
                <a href="#" className="block py-2 text-gray-300 hover:text-white">Home</a>
                <a href="#" className="block py-2 text-gray-300 hover:text-white">About</a>
                <a href="#" className="block py-2 text-gray-300 hover:text-white">Services</a>
                <a href="#" className="block py-2 text-gray-300 hover:text-white">Contact</a>
            </div>
        </header>
    )
}