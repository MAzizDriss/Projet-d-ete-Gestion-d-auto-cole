import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from './logo.png';


function Sidebar({sidebar, setSidebar}) {
  
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <div style={{marginLeft:'150px'}}><FaIcons.FaBars className='bars' onClick={showSidebar} /></div>
              </Link>
            </li>
            <Link to='/'>
            <div>
              <img className="logo" src={logo} />
            </div>
            <div className='Title'>
              <h3>Auto ecole Siti</h3>
            </div>
            </Link>
            <hr className='line'/>
            <div style={{marginTop:'30px'}}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={showSidebar}>
                  <Link to={item.path} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </div>
          </ul>
          <div className="side-menu-footer">
            <div className="user-info">
              <h5>Ines Essetti</h5>
              <p>inesessetti99@gmail.com</p>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
   //       <img className="avatar" src={avatar} className="avatar"/>  
     //       <Avatar alt="Remy Sharp" src={avatar.png} />

 

export default Sidebar;