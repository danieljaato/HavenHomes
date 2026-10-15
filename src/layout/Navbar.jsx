import { Link } from "react-router-dom";

import { Menu, X ,House} from "lucide-react";
import { useState } from "react"; 

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 m-0 left-0 right-0 z-50 bg-[#FAF9F6] backdrop-blur-sm border-b border-gray-200">
            <nav className="w-full mx-auto px-4 py-3 flex items-center justify-between">
                <a href="/" className="flex items-center gap-3 font-bold tracking-tight hover:opacity-80">
                    <House size={32} className="text-[#073B32]" />
                        
                    <div className="flex flex-col">
                        <span className="text-lg text-[#073B32]">HavenHome</span>
                        <span className="text-[10px] tracking-widest text-gray-500 font-semibold">BUY . RENT . INVEST</span>
                    </div>
                </a>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
                    <Link to="/" className="px-4 py-2 hover:text-[#0e3b2f] bg-[#FAF9F6] transition-colors rounded-full">
                        Home
                    </Link>
                    <Link to="/About" className="px-4 py-2 hover:text-[#0e3b2f] bg-[#FAF9F6] transition-colors rounded-full">
                        About
                    </Link>
                    <Link to="/Service" className="px-4 py-2 hover:text-[#0e3b2f] bg-[#FAF9F6] transition-colors rounded-full">
                        Service
                    </Link>
                    <Link to="/Contact" className="px-4 py-2 hover:text-[#0e3b2f] bg-[#FAF9F6] transition-colors rounded-full">
                        Contact
                    </Link>
                </div>

                <div className="hidden md:block">
                    <a href="https://wa.me/+2348061118674" className="bg-[#073B32]/50 hover:bg-green-300 text-black px-6 py-2 rounded-full text-xs tracking-wider font-semibold transition-colors duration-200 shadow-sm">
                        CALL NOW
                    </a>
                </div>

                <div className="block md:hidden bg-[#FFD700] p-1 rounded text-black">
                    <button onClick={() => { console.log("Clicked"); setIsMobileMenuOpen((prev) => !prev); }}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu (Keeps dark background since the drawer is dark) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#0B0B0C] border-t border-gray-800 pb-4">
                    <div className="container mx-auto px-6 flex flex-col gap-2 text-gray-300 pt-3">
                        <Link to="/" className="px-4 py-2 text-sm hover:text-white rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                        </Link>
                        <Link to="/About" className="px-4 py-2 text-sm hover:text-white rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                            About
                        </Link>
                        <Link to="/Service" className="px-4 py-2 text-sm hover:text-white rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                            Service
                        </Link>
                        <Link to="/Contact" className="px-4 py-2 text-sm hover:text-white rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;