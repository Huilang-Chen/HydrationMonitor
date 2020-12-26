import React from 'react';
import { Link } from "react-router-dom";

function QuizQ2() {
  return (
      <div>
        <h1 className="font-bold text-2xl">Do you go to bathroom average 5-8 times a day?</h1>

        <Link
          to="/goodhydration"
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

export default QuizQ2
