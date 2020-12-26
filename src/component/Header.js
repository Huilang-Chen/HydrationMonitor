import React from 'react';
import Navigation from './Navigation.js';
import logo from './../image/logo.JPG'

function Header() {
  return (
    // traditional way to add css
    // <header className = "app-header">

    // use tailwind css framework
    <header className="border-b p-3 flex justify-between items-center">
      <div className = "font-bold flex justify-start items-center">
        <img src={logo} alt="logo" height={30} width={30}/>
        <h1 className="text-xl p-1">Hydration Monitor</h1>
      </div>

      <Navigation />
    </header>
  )
}

export default Header
