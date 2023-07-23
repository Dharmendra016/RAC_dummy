import React from 'react'
import Herosection from '../Herosection/Herosection';
import WorkshopSection from '../WorkshopSection/WorkshopSection';
import Competitions from '../Competitions/Competitions';
import Footer from '../Footer/Footer';

function Homepage() {
  return (
    <div>
      <Herosection/>
      <WorkshopSection/>
      <Competitions/>
      <Footer></Footer>
    </div>
  )
}

export default Homepage;
