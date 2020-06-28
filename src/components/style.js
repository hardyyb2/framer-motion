export const root = {
  exit: {
    x: '-110vw',
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
}

export const HomeContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  exit: root.exit,
}

export const listStyle = {
  hidden: {
    x: '200vw',
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 60,
    },
  },
  exit: root.exit,
}

export const optionStyle = {
  whileHover: {
    originX: 0,
    scale: 1.2,
    color: '#f0f123',
  },
  transition: {
    type: 'spring',
    stiffness: 220,
  },
}

export const buttonStyle = {
  visible: {
    x: 20,
  },
  hover: {
    scale: 1.05,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
}

export const nextButton = {
  hidden: {
    x: '-220vw',
  },
  visible: {
    x: 0,

    transition: {
      type: 'spring',
      stiffness: 40,
    },
  },
}

export const thankyou = {
  hidden: {
    x: '101vw',
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: 'spring',
      mass: 0.9,
      stiffness: 60,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
}

export const OrderHeader = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

export const modalVariants = {
  hidden: {
    y: '-220vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
}
