import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Categories from './Components/Categories/Categories'
import Shop from './Components/Shop/Shop'
import Deal from './Components/Deal/Deal'
import Testimonials from './Components/Testimonials/Testimonials'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <main className='app'>
      <Navbar />
      <Header />
      <Categories />
      <Shop />
      <Deal />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  )
}

export default App