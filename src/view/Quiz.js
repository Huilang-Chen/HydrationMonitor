import React from 'react';
import { Link } from "react-router-dom";

function Quiz() {
  return (
      <div>

        <h1 className="font-bold text-2xl">Does the urine have the color of lemon juice or lighter color?</h1>
        <Link
          to="/quizq2"
          className="text-blue-500 p-3 border-b"
          >
          Yes
        </Link>

        <Link
          to="/dehydrated"
          className="text-blue-500 p-3 border-b"
          >
          No
        </Link>

      </div>
  )
}

export default Quiz
