import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import Layout from './Layout';
import PrivateRoute from './user/PrivateRoute';
import PublicRoute from './user/PublicRoute';

export default function App() {

    return (
      <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" component={<LoginPage/>} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts/>} />
              }
            />
          </Route>
        </Routes>
      </>
    );
}