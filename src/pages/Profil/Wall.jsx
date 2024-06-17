import React from 'react'
import ProfilNavbar from '../../components/Basics/ProfilNavbar'
import Footer from '../../components/Basics/Footer'
import SideNav from '../../components/Profil/SideNav'
import HeaderProfil from '../../components/Profil/HeaderProfil'
import MyWall from '../../components/Profil/MyWall'

function Wall() {
  return (
    <>
        < ProfilNavbar />
        < HeaderProfil />
        < SideNav />
        < MyWall />
        < Footer />
    </>
  )
}

export default Wall;