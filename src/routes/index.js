import React from 'react';
import UserManagement from '../views/userManagement';
import UserCreate from '../views/userCreate';

import openDoor from '../assets/img/openDoor.png';
import exit from '../assets/img/exit.png';
import logout from '../assets/img/logout.png';

//routes added here will be mapped to exist at the given path
const indexRoutes = [
  {
    path: '/',
    name: 'UserManagement',
    component: UserManagement,
    render: <UserManagement />,
    sidebarLinks: [
      {
        image: exit,
        to: '#',
        alt: 'exit',
      },
      {
        image: openDoor,
        to: '#',
        alt: 'open door',
      },
    ],
  },
  {
    path: '/create',
    name: 'UserCreate',
    component: UserCreate,
    render: <UserCreate />,
    sidebarLinks: [
      {
        image: logout,
        to: '#',
        alt: 'logout',
      },
    ],
  },
];

export default indexRoutes;
