import React from 'react';
import { Link } from "react-router-dom";
import waterdrop from "./../image/03212019-23.jpg"

function QuizQ2() {
  return (
      <div>
        <h1 className="font-bold text-xl text-center p-3">
          Do you go to bathroom average 5-8 times a day?
        </h1>

        <div className="pt-3 pb-5 flex justify-evenly font-bold">
          <div className="py-2.5 shadow-lg border-4 border-green-400 rounded-lg">
            <Link
              to="/goodhydration"
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

      <div className="flex justify-center pt-10">
        <img src={waterdrop} alt="water drop" height={700} width={500} />
      </div>
    </div>
  )
}

export default QuizQ2
