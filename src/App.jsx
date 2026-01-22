import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Zag from './compinets/zag'
import Header from './compinets/header'
import Button from './compinets/Button'
import Footer from './compinets/Footer'
import Body from './compinets/Body'
import Cards from './compinets/Cards'
import Box from './compinets/Box'
import Product from './compinets/Product'


function App() {
  

  return (
    <>
      <Header/>
      <Zag/>
      <Body/>
      <Cards/>
      <Footer/>
      <Box children="Дуадуадуда"/>
      <p><Product title="Книга" price={1000} instock="в наличии"/></p>
      <Product title="мозги" price={20000} instock="нету"/>
      <p><Product title="круто" price={1500} instock="в наличии"/></p>
      
    </>
    
    
  ) 
}

export default App
