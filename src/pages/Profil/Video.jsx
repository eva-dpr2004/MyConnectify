import React from 'react'
import ProfilNavbar from '../../components/Basics/ProfilNavbar'
import Footer from '../../components/Basics/Footer'
import SideNav from '../../components/Profil/SideNav'
import HeaderProfil from '../../components/Profil/HeaderProfil'
import MyVideo from '../../components/Profil/MyVideo'

function Video() {
  return (
    <>
        < ProfilNavbar />
        < HeaderProfil />
        < SideNav />
        < MyVideo />
        < Footer />
    </>
  )
}

export default Video;