import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from 'lottie-react'
import scrollAimation from './assets/scrollAnimation.json'
import "./App.css"

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleAnimation = () => {
      controls.start({
        x: scrollY > 80 ? 800 : 0,
      });
    };

    const handleAnimation2 = () => {
      controls2.start({
        x: scrollY > 80 ? -800 : 0,
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleAnimation();
    handleAnimation2();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, controls]);

  return (
    <>
      <div className="relative h-[100vh] overflow-x-hidden">
        <Lottie className='h-80 absolute right-0' animationData={scrollAimation}/>
        <div className="flex justify-center overflow-hidden items-center h-full">
        <motion.div 
           initial={{rotate: 0, opacity: 1}}
           animate={{rotate: 180, opacity: 0}}
           transition={{ ease: "linear", delay: 2, duration: 2 }}
           className="h-[20vw] w-[20vw] bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex justify-center items-center">
            Rotating
          </motion.div>

          <motion.div
            initial={{ opacity: 1, width: "50vw" }}
            animate={{ opacity: 0, width: 0 }}
            transition={{ ease: "linear", delay: 1, duration: 2 }}
            className="bg-gradient-to-r from-amber-500 via-orange-400 to-indigo-500 w-[50vw] h-[100vh] absolute left-0"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 1, width: "50vw" }}
            animate={{ opacity: 0, width: 0 }}
            transition={{ ease: "linear", delay: 1, duration: 2 }}
            className="bg-gradient-to-l from-amber-500 via-orange-400 to-indigo-500 w-[50vw] h-[100vh] absolute right-0"
          ></motion.div>
        </div>
        <div className="flex justify-between overflow-hidden fixed bottom-0">
          <motion.div
            style={{ position: "fixed", bottom: 0, right: 0 }}
            initial={{ x: 0 }}
            animate={controls}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[50vw] h-[20vh]"
          >
            <img
              className="h-full w-full object-cover"
              src="https://cdn2.vectorstock.com/i/1000x1000/80/86/cloud-bottom-border-blue-sky-high-background-vector-48498086.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            style={{ position: "fixed", bottom: 0, left: 0 }}
            initial={{ x: 0 }}
            animate={controls2} 
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[50vw] h-[20vh]"
          >
            <img
              className="h-full w-full object-cover"
              src="https://cdn2.vectorstock.com/i/1000x1000/80/86/cloud-bottom-border-blue-sky-high-background-vector-48498086.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex justify-center items-end">End</div>
    </>
  );
};

export default App;
