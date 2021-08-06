import React from 'react';
import logo from '../images/logo.png';
import './Navbar.css'
export default function NavbarEveryone(){
    return(
    <div>
        <img src={logo} className="navbar-image"/>
        <div className="Navbar-options">
            <h1>Navbar</h1>
        </div>
    </div>
    )
}
/*import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from './logo.png';
import avatar from './avatar.png';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function NavbarEveryone() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Acceuil', 'Calendrier', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {
                <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} className='bars' style={{float:'left',boxSizing:'border-box'}}/>
          </Link>
          <div className='site-title'><h1>Auto école SITI</h1></div>
        </div>
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
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={showSidebar}>
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
      </IconContext.Provider>}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
*/