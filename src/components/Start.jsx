import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariant = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: 0,
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const circleVariant = {
    hidden: { y: 300 },
    visible: {
        x: 0,
        y: 0,
        offset: 30,
        transition: {
            type: 'spring',
            stiffness: '130',
            duration: 2,
            delay: 0.5,
            mass: 0.4,
            damping: 8,
        }
    },
    move: {
        x: [-300, -300, 300, 300, -300],
        y: [150, -150, -150, 150, 150],
        transition: {
            duration: 16,
            repeat: Infinity,
        }
    },

}

const time_count_container_variant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 2,
            staggerChildren: 4,
        }
    }
}


const Start = () => {

    return (
        <motion.div
            variants={containerVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='start_animation_container'>

            <motion.div className='text_container'
                variants={time_count_container_variant}
                initial='hidden'
                animate='visible'>
                <motion.h1 className='time_count_nums'
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: [
                            0, 1, 1, 0,
                            0, 0, 0, 0,
                            0, 0, 0, 0,
                            0, 0, 0, 0,],
                        scale: [1, 2],
                        transition: {
                            duration: 16,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                        }
                    }}
                >Breathe In</motion.h1>
                <motion.h1 className='time_count_nums' className='time_count_nums'
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [
                            0, 0, 0, 0,
                            0, 1, 1, 0,
                            0, 0, 0, 0,
                            0, 0, 0, 0,],
                        transition: {
                            duration: 16,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                        }
                    }}>Hold</motion.h1>
                <motion.h1 className='time_count_nums' className='time_count_nums'
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [
                            0, 0, 0, 0,
                            0, 0, 0, 0,
                            0, 1, 1, 0,
                            0, 0, 0, 0,],
                        scale: [2, 0.5],
                        transition: {
                            duration: 16,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                        }
                    }}>Breathe Out</motion.h1>
                <motion.h1 className='time_count_nums' className='time_count_nums'
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [
                            0, 0, 0, 0,
                            0, 0, 0, 0,
                            0, 0, 0, 0,
                            0, 1, 1, 0,],
                        scale: 1.1,
                        transition: {
                            duration: 16,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                        }
                    }}>Hold</motion.h1>
            </motion.div>
            <motion.div
                className="circle"
                variants={circleVariant}
                animate='move'>
            </motion.div>
        </motion.div>
    )
};

export default Start;