import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { thankyou, OrderHeader } from './style'

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [])

  return (
    <motion.div
      className='container order'
      variants={thankyou}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <motion.h2 exit={{ y: '-100vh' }}>Thank you for your order :)</motion.h2>

      <motion.p variants={OrderHeader}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping} variants={OrderHeader}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Order
