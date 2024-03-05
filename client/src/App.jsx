import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs'

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
