import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavegatorBox } from './NavegatorStyle'
import singletonLogo from '../../assets/svgs/logo.svg'

const NavegatorComponent = () => {

    useEffect(() => {
        const navbar = document.getElementById("nav-bar");
        let prevScrollPos = window.pageYOffset;
        if (navbar) {
            window.onscroll = () => {
                if (navbar.style.top === "") {
                    navbar.style.top = "0px";
                }
                const currentScrollPos = window.pageYOffset;
                if (prevScrollPos > currentScrollPos) navbar.style.top = "0px";
                else navbar.style.top = "-80px";
                prevScrollPos = currentScrollPos;
            };
        }

    }, []);

    return (
        <NavegatorBox>
                <nav id='nav-bar' className='nav-bar'>
                    <div className='logo'>
                        <img className='logo-img' src={singletonLogo} alt="" />
                        <div className='title'>
                            Singleton
                        </div>
                    </div>
                    <ul className='nav-ul'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Product</Link></li>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
        </NavegatorBox>
    )
}

export default NavegatorComponent