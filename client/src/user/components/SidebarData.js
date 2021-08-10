import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';
import * as BsIcons from 'react-icons/bs';


export const SidebarData = [
  {
    title: 'Acceuil',
    path: '/user/home',
    icon: <TiIcons.TiHomeOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Calendrier',
    path: '/user/Calendrier',
    icon: <BsIcons.BsCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Questionnaire',
    path: '/user/questionnaire',
    icon: <FaIcons.FaWpforms />,
    cName: 'nav-text'
  },

];
