import React, { useState } from "react";
import "./testimonial.css";
import { testimonialdata } from "../../data/Testimonialsdata";
import {motion} from 'framer-motion'

const Testimonial = () => {
  const [selected, setselected] = useState(0);
  const tlength = testimonialdata.length;
  const transition={type:"spring",duration:2};

  return (
    <div className="testimonial" id="testimonials">
      <div className="leftt">
        <span>Testimonials</span>
        <span className="stroketext">What they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}
        >{testimonialdata[selected].review}</motion.span>
        <span className="author">
          <span style={{ color: "var(--orange)" }}>
            {testimonialdata[selected].name}
          </span>{" "}
          -{testimonialdata[selected].status}
        </span>
      </div>
      <div className="rightt">
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div
        initial={{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>


        <motion.img
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        src={testimonialdata[selected].image} alt="" />
        <div className="arrows">
          <i
            class="bx bx-left-arrow-alt"
            onClick={() => {
              selected === 0
                ? setselected(tlength - 1)
                : setselected((prev) => prev - 1);
            }}
          ></i>
          <i
            class="bx bx-right-arrow-alt"
            onClick={() => {
              selected === tlength - 1
                ? setselected(0)
                : setselected((prev) => prev + 1);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
