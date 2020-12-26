import React from 'react';
import waterheart from './../image/good.jfif';

function GoodHydration() {
  return (
    <div>
      <div className="p-5 font-bold text-2xl text-center">
        <h1>You are well hydrated.</h1>
        <h1>Keep up the good effort.</h1>
      </div>

      <div className="p-3 text-center">
        <h1 className="font-bold text-xl">Benefits of keeping hydrated:</h1>
        <ol className="p-1">
          <li>Water promotes cardiovascular health</li>
          <li>Water balances body temperature</li>
          <li>Water helps muscles and joints work better</li>
          <li>Water keeps skin supple</li>
          <li>Water removes toxins from your body</li>
        </ol>
      </div>

      <img src={waterheart} alt="water" className="pt-5"/>
    </div>
  )
}

export default GoodHydration
