import React from 'react';
import { Link } from "react-router-dom";

function NavigationMenu (props) {
  return (
    <div>
      <div className="font-bold text-2xl py-3">
        ✌️ Hydration Monitor
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
