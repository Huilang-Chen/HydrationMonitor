import React from 'react';
import { Link } from "react-router-dom";
import logo from './../image/logo.JPG'

function NavigationMenu (props) {
  return (
    <div>
      <div className="font-bold text-2xl py-3 flex justify-start items-center">
        <img src={logo} alt="logo" height={30} width={30}/>
        <h1 className="text-xl p-1">Hydration Monitor</h1>
      </div>
      <ul>

        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
            >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/quiz"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
            >
            Quiz
            </Link>
        </li>

        <li>
          <Link
            to="/goodhydration"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
            >
            GoodHydration
            </Link>
        </li>

        <li>
          <Link
            to="/dehydrated"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
            >
            Dehydrated
            </Link>
        </li>

        <li>
          <Link
            to="/references"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
            >
            References
            </Link>
        </li>

      </ul>
    </div>
  )
}

export default NavigationMenu
