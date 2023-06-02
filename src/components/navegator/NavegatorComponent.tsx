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
                    <li><Link to="#home">Home</Link></li>
                    <li><Link to="#home">Product</Link></li>
                    <li><Link to="#home">Services</Link></li>
                    <li><Link to="#home">About</Link></li>
                    <li><Link to="#home">Blog</Link></li>
                    <li><Link to="#home">Contact</Link></li>
                    <li><Link to="/" className='country-label'>
                        <div className='country bolivia'>
                            <span className='B'>
                                B
                            </span >
                            <span className='O'>
                                O
                            </span >
                            <span className='L'>
                                L
                            </span>
                        </div>
                        <div className='country paraguay'>
                            <span className='P'>
                                P
                            </span >
                            <span className='A'>
                                A
                            </span >
                            <span className='R'>
                                R
                            </span>
                        </div>
                    </Link></li>

                </ul>
            </nav>
        </NavegatorBox>
    )
}

export default NavegatorComponent