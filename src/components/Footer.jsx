export default function Footer() {
    return (
        <footer className="footer-wrapper bg-gray-800 text-white py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <h5 className="text-lg font-semibold">MyCompany</h5>                    
                <p className="text-sm text-gray-400">© 2025 MyCompany. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
                </div>
            </div>
        </footer>
    )
}