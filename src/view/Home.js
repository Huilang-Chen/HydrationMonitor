import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl">
      Why you may be dehydrated without knowing it?
      </h1>

      <p>The body may not indicate thirst, even when people already in the status of lacking fluids. When people sense thirst, the body usually already in mild hydration state ( lost 1-2% of body weight).</p>

      <p>Being dehydrated for a long duration increases the possibility of getting kidney stones, diabetes and other vascular diseases.</p>


      <Link
        to="/quiz"
        className="text-blue-500 py-3 border-b block"
        >
        Start Checking Hydration Status
      </Link>


    </div>
  )
}

export default Home
