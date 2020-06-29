import React from 'react'
import { motion } from 'framer-motion'
import { HeaderSvg, HeaderSvgPath } from './style'

const Header = () => {
  return (
    <header>
      <motion.div
        className='logo'
        drag
        dragElastic={1}
        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
      >
        <motion.svg
          className='pizza-svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
          variants={HeaderSvg}
          initial='hidden'
          animate='visible'
        >
          <motion.path
            fill='none'
            d='M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z'
            variants={HeaderSvgPath}
          />
          <motion.path
            fill='none'
            d='M50 30 L50 -10 C50 -10 90 -10 90 30 Z'
            variants={HeaderSvgPath}
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className='title'
        initial={{
          y: -200,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
        }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header
