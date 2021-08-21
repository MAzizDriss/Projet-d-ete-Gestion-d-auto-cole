import React from 'react';
import { useHistory } from 'react-router'
import axios from 'axios';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import logo from './logo.png';
import { BiLogInCircle } from 'react-icons/bi';
import './Navbar.css';

function Sidebar({ sidebar, setSidebar }) /* Sidebar prend en params les variables sidebar et setsidebar 
car l'ouverture et la fermeture du sidebar depend des bars qui existent aussi sur le navbar : d'où la relation
entre SidebarJs et NavbarJs*/ {
  const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);

  const [user, setuser] = React.useState({})
  React.useEffect(() => {
    axios.get('http://localhost:3001/api/auth', {
      headers: {
        "auth-token": localStorage.getItem('token')
      }
    }).then((result) => {
      setuser(result.data.userData)
    })
      .catch((err) => console.log(err))
  }, [])
  // Avoir les données de l'utilisateur

  const Disconnect = () => {
    localStorage.setItem('isAuth', false)
    history.push("/login")
    setuser({})
    localStorage.setItem('token', '')
  }
  // Se déconnecter : Authentification = false et revenir à la page de login

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <div style={{ marginLeft: '150px' }}>
                  <FaIcons.FaBars className='bars' onClick={showSidebar} />
                </div>
              </Link>
            </li>
            <Link to='/'>
              <div>
                <img className="logo" src={logo} />
              </div>
              <div className='Titles'>
                <h3>Auto école SITI</h3>
              </div>
            </Link>
            <hr className='line' />
            <div style={{ marginTop: '30px' }}>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName} >
                    <Link to={item.path} onClick={showSidebar}>
                      {item.icon}
                      <span >{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
          <div className="side-menu-footer">
            <BiLogInCircle style={{ width: 25, height: 25, marginLeft: 20, marginRight: -10, marginBottom: 5, marginTop: 15 }} className='logo' onClick={Disconnect} />
            <div className="user-info">
              <h5><div className='footer-link'>{user.name}</div> </h5>
              <p>{user.role}</p>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;