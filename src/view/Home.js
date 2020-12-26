import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-2">
      <h1 className="font-bold text-xl ">
        Why you may be dehydrated without knowing it?
      </h1>

      <p className="p-2.5 overflow-ellipsis">The body may not indicate thirst, even when people already in the status of lacking fluids. When people sense thirst, the body usually already in mild hydration state ( lost 1-2% of body weight).</p>

      <p className="p-2.5 pb-5 overflow-ellipsis">Being dehydrated for a long duration increases the possibility of getting kidney stones, diabetes and other vascular diseases.</p>

      <div className="py-2.5 border-4 border-green-400 rounded-lg flex justify-center">
        <Link
          to="/quiz"
          className="text-blue-500 text-xl font-bold"
          >
          Start Checking Hydration Status
        </Link>
      </div>

    </div>
  )
}

export default Home
