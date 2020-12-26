import React from 'react';
import { Link } from "react-router-dom";

function Quiz() {
  return (
      <div>
          <h1 className="font-bold text-xl text-center p-3">Does the urine have the color of lemon juice or lighter color?</h1>
          <div className="pt-3 flex justify-evenly">
          <div className="py-2.5 border-4 border-green-400 rounded-lg">
            <Link
              to="/quizq2"
              className="text-blue-500 p-3 hover:underline"
              >
              Yes
            </Link>
          </div>

          <div className="py-2.5 border-4 border-green-400 rounded-lg">
            <Link
              to="/dehydrated"
              className="text-blue-500 p-3 hover:underline"
              >
              No
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Quiz
