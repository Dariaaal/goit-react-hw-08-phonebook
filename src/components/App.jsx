// import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Navigation from './user/Navigation'
// import Layout from './Layout';

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

      <Contacts/>

      {/* <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<HomePage/>}/>
        <Route path='movies' element={<Movies/>}/>
      </Routes> */}
        </div>
      );
}