import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Button } from '@material-ui/core';
import {FiLogOut} from 'react-icons/fi'
import { useHistory } from 'react-router';

function Navbar({sidebar,setSidebar}) {
  const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);
const logout = () => {
    localStorage.setItem('isAuth',false)
    history.push("/login")
  
}
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} className='bars' style={{float:'left',boxSizing:'border-box'}}/>
          </Link>
          <div className='site-title'><h1>Auto école SITI</h1></div>
          <Button  className='logout' onClick={logout}><h4 className="deconnection">Se déconnecter</h4><FiLogOut style={{marginLeft: 10, marginTop: 2}}/></Button>
        </div>
      </IconContext.Provider>
    </>
  );
}
   /*       <img className="avatar" src={avatar} className="avatar"/>  
            <Avatar alt="Remy Sharp" src={avatar.png} /> */

 

export default Navbar;