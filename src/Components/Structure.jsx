import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer';
import TimeBar from "../Components/TimeBar/TimeBar";

function Structure() {
  return (
    <>
        <TimeBar/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Structure
