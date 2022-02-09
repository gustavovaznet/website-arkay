//HEADER COMPONENT

//IMPORTING
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import MainMenu from '../MainMenus';
import Search from '../Search';

//HEADER
const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handleShowHideMobileMenu = () => {
        setShowMobileMenu(props => !props);
    }
    return (
        <header className="header-01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="" />
                            </Link>
                            <button onClick={handleShowHideMobileMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`} id="navbarNavDropdown">
                                <MainMenu />
                            </div>
                            <Search />
                            <Link to="/" className="appoint-btn">Fale Conosco <i className="fa fa-long-arrow-right"></i></Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
