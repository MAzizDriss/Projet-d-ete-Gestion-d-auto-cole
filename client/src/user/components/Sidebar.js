import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from './logo.png';
import { Avatar } from '@material-ui/core';
import {BiLogInCircle} from 'react-icons/bi';
import axios from 'axios';

function Sidebar({sidebar, setSidebar}) {
  
  const showSidebar = () => setSidebar(!sidebar);
  const [user, setuser] = React.useState({})
  const [post, setpost] = React.useState({})
  React.useEffect(() => {
      axios.get('http://localhost:3001/api/test',{headers:{
          "auth-token":localStorage.getItem('token')
      }}).then((result)=>{setpost(result.data.posts)
                          setuser(result.data.user.userData)
                              })
      .catch((err)=>console.log(err))
  }, [])
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
            <BiLogInCircle style={{width: 25, height:25, marginLeft:20, marginRight:-10, marginBottom:3}}/>
            <div className="user-info">
              
              <h5>{user.name}</h5>
              <p>{user.role}</p>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

 

export default Sidebar;