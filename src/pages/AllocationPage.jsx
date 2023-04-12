import React from 'react'
import Allocation from '../components/allocation/Allocation'
import FooterComp from '../components/footer/FooterComp'
import Jumbotron from '../components/jumbotron/Jumbotron'
import NavbarComp from '../components/navbar/NavbarComp'

function AllocationPage() {
  return (
    <div>
        <NavbarComp/>
        {/* <Jumbotron/> */}
        <Allocation/>
        <FooterComp/>
    </div>
  )
}

export default AllocationPage