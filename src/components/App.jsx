import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Navigation from './user/Navigation';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import Layout from './Layout';

export default function App() {

    return (
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

      <header><Navigation/></header>

      <LoginPage/>

      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
        </div>
      );
}