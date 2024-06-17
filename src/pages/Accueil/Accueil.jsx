import React from 'react'
import Navbar from '../../components/Basics/Navbar'
import Footer from '../../components/Basics/Footer'
import NewsletterForm from '../../components/Accueil/NewsletterForm'
import Banner from '../../components/Accueil/Banner'
import Images from '../../components/Accueil/Images'

import '../../styles/Accueil.css';
import '../../styles/Basics/Footer.css';
import '../../styles/Basics/Navbar.css';

function Accueil() {
  return (
    <>
      < Navbar/>
      < Banner />
      < Images />
      < NewsletterForm />
      < Footer />
    </>
  )
}

export default Accueil