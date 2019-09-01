import React from 'react';
import UserManagement from '../views/userManagement';
import UserCreate from '../views/userCreate';

//routes added here will be mapped to exist at the given path
const indexRoutes = [
  {
    path: '/',
    name: 'UserManagement',
    component: UserManagement,
    render: <UserManagement />,
  },
  {
    path: '/create',
    name: 'UserCreate',
    component: UserCreate,
    render: <UserCreate />,
  },
];

export default indexRoutes;
