import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import navIcon from '../../assets/nav-icon.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/tokenomics">Tokenomics</NavLink>
            </li>
            <li>
                <NavLink to="/howtobuy">How to Buy</NavLink>
            </li>
            <li>
                <NavLink to="/roadmap">Roadmap</NavLink>
            </li>
        </>
    );

    return (
        <div className={`navbar-wrapper ${isScrolled ? 'bg-[#003300]' : 'bg-[#001a00]'} fixed top-0 left-0 w-full z-50`}>
            <div className="navbar border-b-2 border-green-700">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase text-white"
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className="w-12 h-12" src={navIcon} alt="Logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase text-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-[#40FE5B] bg-[#02B81C4D] text-white hover:bg-green-600">Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
