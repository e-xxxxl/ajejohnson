import React from 'react'
import Header from '../Nav/Header'
import MainSection from '../HeroSection/MainSection'
import CardsSection from '../HeroSection/CardsSection'
import Marquee from '../HeroSection/marquee'
import TicTacToe from '../HeroSection/TicTacToe'

const NavPage = () => {
  return (
    <>
    <Header/>
    <MainSection/>
    <CardsSection/>
    <Marquee/>
    <TicTacToe/>
    </>
  )
}

export default NavPage