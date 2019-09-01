import UserManagement from '../views/userManagement'
import UserCreate from '../views/userCreate'

const indexRoutes = [
    { 
        path: "/", 
        name: "UserManagement", 
        component: UserManagement ,
    },
    { 
        path: "/create", 
        name: "UserCreate", 
        component: UserCreate ,
    },
]

export default indexRoutes
