import React, { useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  const MenuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  })

  const MaskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    // use tailwind css framework
    <nav>
      <span className = "text-xl">
        <FontAwesomeIcon
          icon={faBars}
          onClick={()=> setShowMenu(!showMenu)}
        />
      </span>

      {
        MenuTransitions.map(({ item, key, props }) =>
          item &&
          <animated.div
            key={key}
            style={props}
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
            // close the menu
            onClick={() => setShowMenu(false)}
          >
          </animated.div>
        )
      }

      {
        MenuTransitions.map(({ item, key, props }) =>
          item &&
          <animated.div
            key={key}
            style={props}
            className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
          >
          <span className="font-bold text-2xl">
            ✌️The menu
          </span>
          <ul>
            <li>Home</li>
            <li>Hydrated</li>
            <li>Dehydrated</li>
          </ul>
          </animated.div>
        )
      }

    </nav>
  )
}

export default Navigation
