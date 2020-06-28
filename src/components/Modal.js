import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { modalVariants } from './style'

const Modal = ({ showModal, setShowModal }) => {
  return (
    showModal && (
      <div className='backdrop'>
        <motion.div
          className='modal'
          variants={modalVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <h2>Want to make another Pizza ?</h2>
          <div className='button'>
            <Link to='/'>
              <button>Confirm</button>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  )
}

export default Modal
