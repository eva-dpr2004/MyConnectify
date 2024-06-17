import React from 'react'
import ProfilNavbar from '../../components/Basics/ProfilNavbar'
import Footer from '../../components/Basics/Footer'
import SideNav from '../../components/Profil/SideNav'
import HeaderProfil from '../../components/Profil/HeaderProfil'
import MyGallery from '../../components/Profil/MyGallery'

function Gallery() {
  return (
    <>
        < ProfilNavbar />
        < HeaderProfil />
        < SideNav />
        < MyGallery />
        < Footer />
    </>
  )
}

export default Gallery;