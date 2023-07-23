import React from 'react'
import Herosection from '../Herosection/Herosection';
import WorkshopSection from '../WorkshopSection/WorkshopSection';
import Competitions from '../Competitions/Competitions';

function Homepage() {
  return (
    <div>
      <Herosection/>
      <WorkshopSection/>
      <Competitions/>
    </div>
  )
}

export default Homepage;
