import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";
import './Navbar.css';
import laptopIcon from '../../images/icons8/icons8-laptop-computer-64.png';
import deleteIcon from '../../images/icons8/icons8-multiply-48.png';
import menuIcon from '../../images/icons8/icons8-menu-24.png';
import {Container, Row, Col} from 'reactstrap';


const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const closeMenu = () => setClick(false);


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (

        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <b>DIGISHOP</b>
                    {/*<img src={laptopIcon}/>*/}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <img src={click ? {deleteIcon} : {menuIcon}}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className="nav-item">
                        <Link to="/headphones" className="nav-links" onClick={closeMenu}>
                            هارد اکسترنال، فلش
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/headphones" className="nav-links" onClick={closeMenu}>
                            هدفون، هدست، میکروفون
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tablet" className="nav-links" onClick={closeMenu}>
                            تبلت
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/computers" className="nav-links" onClick={closeMenu}>
                            کامپیوتر و تجهیزات جانبی
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/laptopTools" className="nav-links" onClick={closeMenu}>
                            تجهیزات جانبی لپ تاپ
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/laptops" className="nav-links" onClick={closeMenu}>
                            لپ تاپ
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/smartWatches" className="nav-links" onClick={closeMenu}>
                            مچ بند و ساعت هوشمند
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mobiles" className="nav-links" onClick={closeMenu}>
                            گوشی موبایل
                        </Link>
                    </li>


                   {/* <li className="nav-item">
                        <Link to="/collections" className="nav-links" onClick={closeMenu}>
                            تجهیزات جانبی گوشی موبایل و تبلت
                        </Link>
                    </li>*/}

                </ul>
                {/*{button && <Button buttonStyle='btn--outline'>Sign Up</Button>}*/}
            </div>
        </nav>
    )
}
export default Navbar
