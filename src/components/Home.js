import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonStyle, HomeContainer } from './style'
import Loader from './Loader'

const Home = () => {
  return (
    <motion.div
      className='home container'
      variants={HomeContainer}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button variants={buttonStyle} whileHover='hover'>
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home
