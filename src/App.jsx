import Home from "./ComponentPages/Home/Home"
import { Route, Routes } from 'react-router-dom'
import Aboutpage from "./ComponentPages/About/Aboutpage"
import ContactPage from "./ComponentPages/contact/ContactPage"
// import TestHome from "./ComponentPages/Home/hh"
import HousesList from "./ComponentPages/housesList"
import OurClients from "./ComponentPages/Ourclients/Ourclients"
function App() {

  return (
    <>


      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<Aboutpage/>}/>
        <Route path='Contact' element={<ContactPage/>}/>
        {/* <Route path='TypeHouse' element={<TestHome/>}/> */}
        <Route path='HousesList' element={<HousesList/>}/>
        <Route path='Clients' element={<OurClients/>}/>



      </Routes>


    </>
  )
}

export default App
