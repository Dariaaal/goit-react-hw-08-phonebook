import { Route, Routes } from 'react-router-dom';
import React, { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import PrivateRoute from './user/PrivateRoute';
import PublicRoute from './user/PublicRoute';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const Contacts = lazy(() => import('pages/Contacts'));

export default function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

 
    return isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

          <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/homepage" element={<HomePage/>} />
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
    </div>
    );
}

