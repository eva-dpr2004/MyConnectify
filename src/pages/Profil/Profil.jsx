import React from 'react'
import Navbar from '../../components/Basics/Navbar'
import Footer from '../../components/Basics/Footer'
import SideNav from '../../components/Profil/SideNav'
import ProfilInfo from '../../components/Profil/ProfilInfo'

function Profil() {
  return (
    <>
        < Navbar />
        < ProfilInfo />
        < SideNav />
            <div>Profil</div>
        < Footer />
    </>
  )
}

export default Profil