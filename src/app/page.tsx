"use client"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">

        <motion.h1 initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)"
        }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"

          }}
          transition={{ duration: 0.35 }}
          className="text-4xl sm:text-6xl font-bold">Imageiscribe
        </motion.h1>

        <motion.p initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)"
        }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          }}
          transition={{ duration: 0.35, delay: 0.35 }}
          className='text-center text-white/50'>
          Turn your text into an image instantly. Just enter your words and see the magic!
        </motion.p>

      </div>
    </div>
  );
}