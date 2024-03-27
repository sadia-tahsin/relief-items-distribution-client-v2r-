import { Button } from 'antd';
import img from '../../assets/images/hero-img (1).jpg';
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
    <div className="w-full h-screen overflow-hidden mb-32 px-5">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="flex-1 max-w-full lg:max-w-2xl mt-8 lg:mt-24 mx-auto lg:mx-0 font-roboto">
          <motion.div variants={intro} initial="hidden" animate="visible">
            <motion.h1
              variants={introChildren}
              className="text-4xl lg:text-5xl font-extrabold font-roboto text-left lg:text-left dark:text-white"
            >
              Together for Change
            </motion.h1>
            <div>
              <motion.h2
                variants={introChildren}
                className="text-3xl lg:text-4xl font-extrabold pt-2 text-left lg:text-left font-roboto"
                style={{ color: 'rgba(87, 1, 203,1)' }}
              >
                Let's make a Difference Today
              </motion.h2>
            </div>

            <motion.p
              variants={introChildren}
              className="py-8 text-left lg:text-left max-w-[50ch] dark:text-white"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.
            </motion.p>
            <motion.div
              variants={introChildren}
              className="text-center"
            >
              <Button className="rounded-none bg-sky-600 px-10">Explore</Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex-1 ml-2 mt-2">
          <img src={img} alt="" className=" w-[560px] lg:h-[100%] lg:w-[100%] object-cover" />
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
