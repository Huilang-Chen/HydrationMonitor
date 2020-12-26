import React from 'react';
import { Link } from "react-router-dom";
import UCC from './../image/UCC.png'

function Quiz() {
  return (
      <div>
        <h1 className="font-bold text-xl text-center p-3">Does your urine have the color of lemon juice or lighter color?</h1>

        <div className="pt-3 pb-10 flex justify-evenly font-bold">

          <div className="py-2.5 shadow-lg border-4 border-green-400 rounded-lg">
            <Link
              to="/quizq2"
              className="text-blue-500 p-3 hover:underline"
              >
              Yes
            </Link>
          </div>

          <div className="py-2.5 shadow-lg border-4 border-green-400 rounded-lg">
            <Link
              to="/dehydrated"
              className="text-blue-500 p-3 hover:underline"
              >
              No
            </Link>
          </div>
        </div>

        <img src={UCC} alt="Urine color chart" className="border-2"/>
      </div>
  )
}

export default Quiz
