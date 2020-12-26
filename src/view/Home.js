import React from 'react';
import { Link } from "react-router-dom";
import drink from './../image/drink.jpg'

function Home() {
  return (
    <div className="p-2">
      <h1 className="font-bold text-xl">
        Why you may be dehydrated without knowing it?
      </h1>

      <p className="p-2.5 overflow-ellipsis">The body may not indicate thirst even when people already in the status of lacking fluids. When people sense thirst, the body usually already in mild hydration state (lost 1-2% of body weight).</p>

      <p className="p-2.5 pb-10 overflow-ellipsis">Being dehydrated for a long duration increases the possibility of getting kidney stones, diabetes and other vascular diseases.</p>

      <div className="p-2.5 text-center md:w-auto">
        <Link
          to="/quiz"
          className="p-3 text-blue-500 text-xl font-bold hover:underline shadow-md border-4 border-green-400 rounded-lg"
          >
          Click Here To Start Checking Your Hydration Status
        </Link>
      </div>

      <div className="flex justify-center pt-7">
        <img src={drink} alt="drink water picture"/>
      </div>
    </div>
  )
}

export default Home
