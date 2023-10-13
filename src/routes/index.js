import { lazy } from 'react';
import Employees from "../pages/Employees.jsx";

const Attendance = lazy(() => import('../pages/Attendance'));

const coreRoutes = [
  {
    path: '/',
    title: 'Employees',
    component: Employees,
  },
  {
    path: '/attendance',
    title: 'Attendance',
    component: Attendance,
  }
];

const routes = [...coreRoutes];
export default routes;
