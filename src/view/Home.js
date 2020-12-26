import React from 'react';
import { Link } from "react-router-dom";
import drink from './../image/drink.jpg'

function Home() {
  return (
    <div className="p-2">
      <h1 className="font-bold text-xl">
        Why you may be dehydrated without knowing it?
      </h1>

      <p className="p-2.5 overflow-ellipsis">The body may not indicate thirst, even when people already in the status of lacking fluids. When people sense thirst, the body usually already in mild hydration state (lost 1-2% of body weight).</p>

      <p className="p-2.5 pb-5 overflow-ellipsis">Being dehydrated for a long duration increases the possibility of getting kidney stones, diabetes and other vascular diseases.</p>

      <div className="p-2.5 shadow-lg border-4 border-green-400 rounded-lg text-center md:w-auto">
        <Link
          to="/quiz"
          className="text-blue-500 text-xl font-bold hover:underline"
          >
          Start Checking Hydration Status
        </Link>
      </div>

      <img src={drink} alt="drink water picture"  className="pt-10"/>
    </div>
  )
}

export default Home
