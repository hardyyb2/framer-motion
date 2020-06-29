import React from 'react'
import { motion, useCycle } from 'framer-motion'
import { LoaderVariants } from './style'

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('visible', 'visibleTwo')
  return (
    <>
      <motion.div
        className='loader'
        variants={LoaderVariants}
        animate={animation}
      ></motion.div>
      <span onClick={cycleAnimation} className='changeLoader'>
        Change Loader
      </span>
    </>
  )
}

export default Loader
