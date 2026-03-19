import React from 'react'
import Header from '../Nav/Header'
import MainSection from '../HeroSection/MainSection'
import CardsSection from '../HeroSection/CardsSection'
import Marquee from '../HeroSection/Marquee'
import TicTacToe from '../HeroSection/TicTacToe'

const NavPage = () => {
  return (
    <main className="bg-black">
      <Header />
      <MainSection />
      <CardsSection />
      <Marquee />
      <TicTacToe />
    </main>
  )
}

export default NavPage