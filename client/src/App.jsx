import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.min.css';


import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Nav />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
