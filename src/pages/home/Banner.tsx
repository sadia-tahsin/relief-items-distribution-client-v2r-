import img from '../../assets/images/tourists-go-up-hill-sunrise.jpg';
import { motion } from "framer-motion";

const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };
  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };
const Banner = () => {
    
    return (
        <div className="relative w-full h-96 overflow-hidden mb-32">
            <img src={img} alt="Banner Image" className="w-full h-full object-cover filter brightness-60" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <div className="bg-black bg-opacity-50 py-10 px-6 w-full">
                <motion.div variants={intro} initial="hidden" animate="visible">
                <motion.p
              variants={introChildren} className="text-4xl font-bold mb-4 text-shadow">Relief Aid Hub</motion.p>
               
                <motion.p
              variants={introChildren} className="text-2xl font-bold text-shadow text-slate-950 mb-4">Join us in creating a brighter future</motion.p>
                <motion.h1
              variants={introChildren} className="text-5xl font-bold mb-8 text-shadow">Your Help Matters</motion.h1>
                   <motion.div
              variants={introChildren}
             
            >
                  <button className="py-3 px-8 text-lg bg-gray-600 hover:bg-blue-700 text-white font-semibold rounded-none shadow-md transition duration-300">
                        Explore Now
                    </button>
            </motion.div>
                  
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
