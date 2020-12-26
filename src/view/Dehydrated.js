import React from 'react';

function Dehydrated() {
  return (
    <div>
      <h1 className="font-bold text-2xl p-5 text-center">You are dehydrated.</h1>

      <h1 className="font-bold text-xl p-2">Recommend you drinking more water:</h1>
      <ul className="pl-3 pb-3">
        <li>3 liters (about 13 cups) of fluid for a male adult each day</li>
        <li>2.4 liters (about 10 cups) of fluid for a female adult each day</li>
        <li>1.7 liters (about 7 cups) of fluid for a child each day</li>
      </ul>

      <p className="p-2">Depend on environment temperature, pregnant or breastfeeding status, it is a good practice to drink 2 to 3 more cups of water adding to the basic amount.</p>
      <p className="p-2">If you perform intense exercise ot labor, drink fluids containing electrolytes will help you regain well hydration status and avoid electrolyte imbalance.</p>

    </div>
  )
}

export default Dehydrated
