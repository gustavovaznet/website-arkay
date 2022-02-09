//MAIN MENU COMPONENT

//IMPORTING
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

//MENUS
const menus = [
    {
        id: 1,
        linkText: 'Home',
        link: '/'
    },
    {
        id: 2,
        linkText: 'Sobre',
        link: '/'
    },
    {
        id: 3,
        linkText: 'Serviços',
        link: '/'
    },
    {
        id: 4,
        linkText: 'Clientes',
        link: '/'
    },
    {
        id: 5,
        linkText: 'Notícias',
        link: '/'
    },
    {
        id: 6,
        linkText: 'Contato',
        link: '/contact'
    },
];

//MAIN MENU
const MainMenu = () => {
    const [showMobileSubmenu, setShowMobileSubmenu] = useState(0);
    const handleShowHideOnMobileMenu = (id) => {
        if (showMobileSubmenu === 0) {
            setShowMobileSubmenu(id);
        } else {
            setShowMobileSubmenu(0);
        }
    }
    return (
        <ul className="navbar-nav">
            {menus.length > 0 ? menus.map((item, i) => (
                <li key={i}
                    onClick={() => handleShowHideOnMobileMenu(item?.id)}
                    className={`${item.child ? 'dropdown' : ''} nav-item`}>
                    {item.child ? <NavLink onClick={e => e.preventDefault()} to="/"
                        className="menu-dropdown nav-link"
                        data-toggle="dropdown">{item.linkText}
                    </NavLink>
                        : <NavLink to={item.link} className="nav-link"
                            data-toggle="dropdown" aria-expanded="true">{item.linkText}
                        </NavLink>}
                    {item.child ?
                        <ul className={`dropdown-menu ${showMobileSubmenu === item?.id ? 'show' : ''}`} role="menu">
                            {item.submenu.map((sub_item, i) => (
                                <li key={i}>
                                    {sub_item.child ?
                                        <NavLink onClick={e => e.preventDefault()}
                                            to="/">{sub_item.linkText}</NavLink>
                                        : <NavLink
                                            to={sub_item.link} className="dropdown-item" >{sub_item.linkText}</NavLink>}
                                </li>
                            ))}
                        </ul>
                        : null
                    }
                </li>
            )) : null}
        </ul>
    );
};

export default MainMenu;
