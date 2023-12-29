//When u add a new view remenber add the path here in the router file
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/content/Loadable';
import MatxLayout from './components/layouts/MatxLayout';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';

//HomeStudent View
const DataStudet = Loadable(lazy(() => import('app/views/StudentView/DataStudent')));
const FormStudent = Loadable(lazy(() => import('app/views/StudentView/FormStudent')));
const Home = Loadable(lazy(() => import('app/views/StudentView/Home')));
//HomeAdmin View
const Companies = Loadable(lazy(() => import('app/views/AdminView/Companies')));
const ConsultAdmin = Loadable(lazy(() => import('app/views/AdminView/ConsultAdmin')));
const Create = Loadable(lazy(() => import('app/views/AdminView/Create')));
const DatesAdmin = Loadable(lazy(() => import('app/views/AdminView/DatesAdmin')));

// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));

//echart page
const AppEchart = Loadable(lazy(() => import('app/views/charts/echarts/AppEchart')));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      //Student
      { path: '/StudentView/DataStudent', element: <DataStudet /> },
      { path: '/StudentView/FormStudent', element: <FormStudent /> },
      { path: '/StudentView/Home/', element: <Home /> },

      //Admin
      { path: '/AdminView/Companies', element: <Companies /> },
      { path: '/AdminView/ConsultAdmin', element: <ConsultAdmin /> },
      { path: '/AdminView/Create', element: <Create /> },
      { path: 'AdminView/DatesAdmin', element: <DatesAdmin /> },

      { path: '/charts/echarts', element: <AppEchart />, auth: authRoles.editor }
    ]
  },

  // session pages route
  { path: '/sessions/404', element: <NotFound /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },

  { path: '/', element: <Navigate to='StudentView/Home' /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
