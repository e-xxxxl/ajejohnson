import React from 'react'
import Header from '../Nav/Header'
import MainSection from '../HeroSection/MainSection'
import CardsSection from '../HeroSection/CardsSection'
import Marquee from '../HeroSection/marquee'
import TicTacToeAI from '../HeroSection/TicTacToeAi'

const NavPage = () => {
  return (
    <>
    <Header/>
    <MainSection/>
    <CardsSection/>
    <Marquee/>
    <TicTacToeAi/>
    </>
  )
}

export default NavPage