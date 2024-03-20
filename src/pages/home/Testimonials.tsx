import img from "../../assets/images/Ellipse 80 (1).png";
import img2 from "../../assets/images/handsome-man-with-glasses.jpg";
import img3 from "../../assets/images/young-bearded-man-with-striped-shirt.jpg";
import img4 from "../../assets/images/836.jpg";
// import arrow1 from "@/assets/bi_arrow-left-short (1).png"
// import arrow2 from "@/assets/bi_arrow-left-short.png"
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import { useScroll, useTransform , motion} from "framer-motion";


const Testimonials = () => {
  const componentRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
    target: componentRef,
    offset: ['0 1','1.2 1']
  });
  //  const scaleValues = useTransform(scrollYProgress, [0,1],[0.9,1])
 const opacityValues = useTransform(scrollYProgress, [0,1],[0.1,1])
  const xValue = useTransform(scrollYProgress,[0,0.75],[-700,0.5])
  const xValue2 = useTransform(scrollYProgress,[0,0.75],[700,0.5])

  return (
    <div className="my-20 ml-10">
       <motion.div 
              style={{
                x:xValue2,
                opacity:opacityValues
            }} 
            ref = {componentRef} >
        <p className="text-xl font-bold mb-4 text-yellow-300 ">Words from Top Contributors</p>
        <h1 className="text-6xl font-extrabold mb-14">
          Testimonials
        </h1>

        </motion.div>

      <div className="block md:hidden">
        <div className={`rounded-md bg-slate-200 p-10 mx-auto my-4`}>
          <div className="flex justify-enter mb-4">
            <img src={img} alt="" className="rounded-full w-20 h-20" />
            <div className="p-4">
              <h4>Jacob Joshua</h4>
              <h5>Chief Manager</h5>
            </div>
          </div>
          <p>
            I found the digital expertise I needed. Their creative-professional
            balance exceeded expectations. Friendly interactions, exceptional
            outcomes. For digital enchantment, it's got to be Embrace!
          </p>
        </div>

        <div className={`rounded-md  bg-slate-200 p-10 mx-auto  my-4`}>
          <div className="flex justify-enter mb-4">
            <img src={img2} alt="" className="rounded-full w-20 h-20" />
            <div className="p-4">
              <h4>Jacob Joshua</h4>
              <h5>Chief Manager</h5>
            </div>
          </div>
          <p>
            I found the digital expertise I needed. Their creative-professional
            balance exceeded expectations. Friendly interactions, exceptional
            outcomes. For digital enchantment, it's got to be Embrace!
          </p>
        </div>

        <div className={`rounded-md  bg-slate-200 p-10 mx-auto my-4`}>
          <div className="flex justify-enter mb-4">
            <img src={img3} alt="" className="rounded-full w-20 h-20" />
            <div className="p-4">
              <h4>Amelia Joseph</h4>
              <h5>Chief Manager</h5>
            </div>
          </div>
          <p>
            Embrace really nails it! Creative brilliance, approachable style.
            They're the partners you want—artistry meets strategy. Thrilled with
            what they achieved!"
          </p>
        </div>

        <div className={`rounded-md bg-slate-200 p-10 mx-auto my-4`}>
          <div className="flex justify-enter mb-4">
            <img src={img4} alt="" className="rounded-full w-20 h-20" />
            <div className="p-4">
              <h4>Amelia Joseph</h4>
              <h5>Chief Manager</h5>
            </div>
          </div>
          <p>
            Embrace really nails it! Creative brilliance, approachable style.
            They're the partners you want—artistry meets strategy. Thrilled with
            what they achieved!"
          </p>
        </div>

        <div className={`rounded-md  bg-slate-200 p-10 mx-auto my-4`}>
          <div className="flex justify-enter mb-4">
            <img src={img2} alt="" className="rounded-full w-20 h-20" />
            <div className="p-4">
              <h4>Amelia Joseph</h4>
              <h5>Chief Manager</h5>
            </div>
          </div>
          <p>
            Embrace really nails it! Creative brilliance, approachable style.
            They're the partners you want—artistry meets strategy. Thrilled with
            what they achieved!"
          </p>
        </div>

        <div className={`rounded-md  bg-slate-200 p-10 mx-auto my-4`}>
          <div className="flex justify-enter mb-4">
            <img src={img} alt="" className="rounded-full w-20 h-20" />
            <div className="p-4">
              <h4>Amelia Joseph</h4>
              <h5>Chief Manager</h5>
            </div>
          </div>
          <p>
            Embrace really nails it! Creative brilliance, approachable style.
            They're the partners you want—artistry meets strategy. Thrilled with
            what they achieved!"
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}

          // onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          <SwiperSlide>
            <motion.div 
              style={{
                x:xValue,
                opacity:opacityValues
            }} 
            ref = {componentRef} className={`rounded-md bg-slate-200 p-10 mx-auto`}>
              <div className="flex justify-enter mb-4">
                <img src={img} alt="" className="rounded-full w-20 h-20" />
                <div className="p-4">
                  <h4>Jacob Joshua</h4>
                  <h5>Chief Manager</h5>
                </div>
              </div>
              <p>
                I found the digital expertise I needed. Their
                creative-professional balance exceeded expectations. Friendly
                interactions, exceptional outcomes. For digital enchantment,
                it's got to be Embrace!
              </p>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
          <motion.div 
              style={{
                x:xValue,
                opacity:opacityValues
            }} 
            ref = {componentRef} className={`rounded-md bg-slate-200 p-10 mx-auto`}>
              <div className="flex justify-enter mb-4">
                <img src={img2} alt="" className="rounded-full w-20 h-20" />
                <div className="p-4">
                  <h4>Jacob Joshua</h4>
                  <h5>Chief Manager</h5>
                </div>
              </div>
              <p>
                I found the digital expertise I needed. Their
                creative-professional balance exceeded expectations. Friendly
                interactions, exceptional outcomes. For digital enchantment,
                it's got to be Embrace!
              </p>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div 
              style={{
                opacity:opacityValues,
                x:xValue,

            }} 
            ref = {componentRef} className={`rounded-md bg-slate-200 p-10 mx-auto`}>
              <div className="flex justify-enter mb-4">
                <img src={img3} alt="" className="rounded-full w-20 h-20" />
                <div className="p-4">
                  <h4>Amelia Joseph</h4>
                  <h5>Chief Manager</h5>
                </div>
              </div>
              <p>
                Embrace really nails it! Creative brilliance, approachable
                style. They're the partners you want—artistry meets strategy.
                Thrilled with what they achieved!"
              </p>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
          <motion.div 
              style={{
                x:xValue,
                opacity:opacityValues
            }} 
            ref = {componentRef} className={`rounded-md bg-slate-200 p-10 mx-auto`}>
              <div className="flex justify-enter mb-4">
                <img src={img4} alt="" className="rounded-full w-20 h-20" />
                <div className="p-4">
                  <h4>Amelia Joseph</h4>
                  <h5>Chief Manager</h5>
                </div>
              </div>
              <p>
                Embrace really nails it! Creative brilliance, approachable
                style. They're the partners you want—artistry meets strategy.
                Thrilled with what they achieved!"
              </p>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
          <motion.div 
              style={{
                x:xValue,
                opacity:opacityValues
            }} 
            ref = {componentRef} 
             className={`rounded-md bg-slate-200 p-10 mx-auto`}>
              <div className="flex justify-enter mb-4">
                <img src={img} alt="" className="rounded-full w-20 h-20" />
                <div className="p-4">
                  <h4>Amelia Joseph</h4>
                  <h5>Chief Manager</h5>
                </div>
              </div>
              <p>
                Embrace really nails it! Creative brilliance, approachable
                style. They're the partners you want—artistry meets strategy.
                Thrilled with what they achieved!"
              </p>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
             <motion.div 
              style={{
                x:xValue,
                opacity:opacityValues
            }} 
            ref = {componentRef}  className={`rounded-md bg-slate-200 p-10 mx-auto`}>
              <div className="flex justify-enter mb-4">
                <img src={img2} alt="" className="rounded-full w-20 h-20" />
                <div className="p-4">
                  <h4>Amelia Joseph</h4>
                  <h5>Chief Manager</h5>
                </div>
              </div>
              <p>
                Embrace really nails it! Creative brilliance, approachable
                style. They're the partners you want—artistry meets strategy.
                Thrilled with what they achieved!"
              </p>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonials;
