import React from 'react';

function Dehydrated() {
  return (
    <div>
      <h1 className="font-bold text-2xl">You are dehydrated.</h1>

      <h1 className="font-bold text-2xl">Recommend you drinking:</h1>
      <ul>
        <li>3 liters (about 13 cups) of fluid for a male adult each day</li>
        <li>2.4 liters (about 10 cups) of fluid for a female adult each day</li>
        <li>1.7 liters (about 7 cups) of fluid for a child each day</li>
      </ul>

      <p>Depend on environment temperature, pregnant or breastfeeding status, it is a good practice to drink 2 to 3 more cups of water adding to the basic amount.</p>
      <p>If you perform intense exercise ot labor, drink fluids containing electrolytes will help you regain well hydration status and avoid electrolyte imbalance.</p>

    </div>
  )
}

export default Dehydrated
