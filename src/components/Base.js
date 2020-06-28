import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { listStyle, optionStyle, buttonStyle, nextButton } from './style'

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

  return (
    <motion.div
      className='base container'
      variants={listStyle}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              {...optionStyle}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className='next' variants={nextButton}>
          <Link to='/toppings'>
            <motion.button variants={buttonStyle} whileHover='hover'>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base
