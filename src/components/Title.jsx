import React from 'react'

// Correct motion import
import { motion, AnimatePresence } from "framer-motion";
import * as variants from "../motion/animation";


const Title = ({title,text,link}) => {
  return (
    <div className='flex items-center justify-between flex-wrap gap-4'>
      <div>
        <motion.h2 variants={variants.fadeInUp}>{title}</motion.h2>
        <motion.p variants={variants.fadeInUp} className='max-w-[640px] mt-4 mb-6'>{text}</motion.p>
      </div>

      <motion.button variants={variants.fadeInUp} className='secondary-btn'>{link}</motion.button>
    </div>
  )
}

export default Title
