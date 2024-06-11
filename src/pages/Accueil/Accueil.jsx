import React from 'react'
import Header from '../../components/Basics/Header'
import Navbar from '../../components/Basics/Navbar'
import Footer from '../../components/Basics/Footer'
import NewsletterForm from '../../components/Accueil/NewsletterForm'
import Banner from '../../components/Accueil/Banner'
import Images from '../../components/Accueil/Images'

function Accueil() {
  return (
    <>
      < Navbar/>
      < Header/>
      < Banner />
      < Images />
      < NewsletterForm />
      < Footer />
    </>
  )
}

export default Accueil