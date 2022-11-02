import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariant = {
    hidden: {x: -1000},
    visible: {x: 0},
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
}

const Home = () => {
    return (
        <motion.div className='breathing-animation-container'
        variants={containerVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
        >
            <h1 className='box-breathing-title'>Box Breathing</h1>
            <Link to="/start">
                <button className='start button'>Start</button>
            </Link>

        </motion.div>
    )
}

export default Home;