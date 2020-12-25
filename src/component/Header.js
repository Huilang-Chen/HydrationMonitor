import React from 'react';
import Navigation from './Navigation.js';

function Header() {
  return (
    // traditional way to add css
    // <header className = "app-header">

    // use tailwind css framework
    <header className="border-b p-3 flex justify-between items-center">
      <span className = "font-bold">
        Hydration Monitor
      </span>

      <Navigation />
    </header>
  )
}

export default Header
