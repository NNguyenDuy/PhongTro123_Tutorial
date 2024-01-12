import React from 'react'
import Header from './Header'
import images from '../../assets'
import { Outlet } from 'react-router-dom'
import { Search, Navigation } from './index'
import { Intro, Contact } from '../../components'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className="w-full flex gap-2 flex-col items-center m-auto ">
      <div className="fixed right-10 bottom-10 p-3 ">
        <images.iconArrowUp
          fill="red"
          size={45}
          className="cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
      <Header />
      <Navigation />
      <Search />
      <div className="w-5/6 flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>
      <Intro />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
