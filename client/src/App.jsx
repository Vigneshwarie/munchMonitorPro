import { Outlet } from 'react';
import Nav from './components/NavTabs'

import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import NavTabs from './components/NavTabs';



function App() {


  return (
    <>
      <Nav />
      <Header />
      {/* <Outlet /> */}
      <Footer />
    </>
  )
}

export default App
