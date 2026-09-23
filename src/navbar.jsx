import { Link } from 'react-router-dom';
import {useState} from 'react';
import { useIsMobile } from './siteFeatures';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    return (
        <nav className="dark:bg-[#1B1B1B] dark:text-white fixed w-full z-20 top-0 start-0 backdrop-blur-xl">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                {/* Left Side */}
                <Link to="/portfolio" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">TEO WEN KAI</span>
                </Link>

                {/* Center */}
                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex space-x-8 font-medium">
                        <li><Link to="/portfolio" className="block py-2 px-3 md:p-0 hover:text-gray-500" aria-current="page">Home</Link></li>
                        <li><Link to="/portfolio/projects" className="block py-2 px-3 md:p-0 hover:text-gray-500">Projects</Link></li>
                        <li><Link to="/portfolio/resume" className="block py-2 px-3 md:p-0 hover:text-gray-500">Resume</Link></li>
                        <li><Link to="/portfolio/about" className="block py-2 px-3 md:p-0 hover:text-gray-500">About</Link></li>
                    </ul>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-8 text-xl">
                    {!isMobile && (
                        <>
                        <a href="https://github.com/YouEsBee/" target="_blank" rel="noreferrer" className="hover:text-gray-500">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/teo-wen-kai-3264a91aa/" target="_blank" rel="noreferrer" className="hover:text-gray-500">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://dribbble.com/awesomeeeee" target="_blank" rel="noreferrer" className="hover:text-gray-500">
                            <i className="fa-brands fa-dribbble"></i>
                        </a>
                        </>
                    )}
                        
                    {/* Hamburger Mobile */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="w-full md:hidden px-3">
                    <ul className="flex flex-col p-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3">Home</Link></li>
                        <li><Link to="/portfolio/projects" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3">Projects</Link></li>
                        <li><Link to="/portfolio/resume" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3">Resume</Link></li>
                        <li><Link to="/portfolio/about" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3">About</Link></li>
                    </ul>

                    <div className="flex justify-center space-x-8 py-3 text-xl">
                        <a href="https://github.com/YouEsBee/" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/teo-wen-kai-3264a91aa/" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://dribbble.com/awesomeeeee" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-dribbble"></i>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}