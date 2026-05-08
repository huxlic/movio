
// import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Trending from '../components/Trending'

const Landing = () => {
  // useEffect(() => {
  //   localStorage.removeItem("mediaType")
  // })
  return (
    <>
    <Header/>
    <Hero/>
    <Trending/>
    </>
  )
}

export default Landing