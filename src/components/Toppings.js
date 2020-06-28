import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { listStyle, optionStyle, buttonStyle } from './style'

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ]

  return (
    <motion.div
      className='toppings container'
      variants={listStyle}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              {...optionStyle}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to='/order'>
        <motion.button variants={buttonStyle} whileHover='hover'>
          Order
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Toppings
