import React from 'react'
import ProfilNavbar from '../../components/Basics/ProfilNavbar'
import Footer from '../../components/Basics/Footer'
import SideNav from '../../components/Profil/SideNav'
import HeaderProfil from '../../components/Profil/HeaderProfil'
import MyWall from '../../components/Profil/MyWall'
import MyGallery from '../../components/Profil/MyGallery'
import MyVideo from '../../components/Profil/MyVideo'
import MyMusic from '../../components/Profil/MyMusic'

function Profil() {
  return (
    <>
        < ProfilNavbar />
        < HeaderProfil />
        < SideNav />
        < MyWall />
        < MyGallery />
        < MyVideo />
        < MyMusic />
        < Footer />
    </>
  )
}

export default Profil