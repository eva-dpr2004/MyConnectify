import React from 'react'
import ProfilNavbar from '../../components/Basics/ProfilNavbar'
import Footer from '../../components/Basics/Footer'
import SideNav from '../../components/Profil/SideNav'
import HeaderProfil from '../../components/Profil/HeaderProfil'
import MyMusic from '../../components/Profil/MyMusic'

function Music() {
  return (
    <>
        < ProfilNavbar />
        < HeaderProfil />
        < SideNav />
        < MyMusic />
        < Footer />
    </>
  )
}

export default Music;