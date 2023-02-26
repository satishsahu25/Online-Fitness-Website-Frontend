import React from "react";
import Header from "../Header/Header";
import "./hero.css";
import heroimg from '../../assets/finalhero.png'
import heroback from '../../assets/heroback.png'
import calorie from '../../assets/calorie.png'
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {

  const transition={type:"spring",duration:2};
  const mobile=window.innerWidth<=768 ?true:false;

  return (
    <div className="hero" id="hero">
      <div className="blur heroblur"></div>
      <div className="leftheader">
        <Header />

        {/* best ad */}
        <div className="bestad">
          <motion.div
          initial={{left:mobile?"160px":"200px"}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:"tween"}}
          >

          </motion.div>
          <span>The Best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="herotxt">
          <div>
            <span className="stroketext">Shape</span>
            <span>&nbsp;Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              libero aspernatur natus possimus doloribus
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter
              end={140}
              start={100}
              delay="4"
              preFix="+"
              />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
          <span>
              <NumberCounter
              end={978}
              start={950}
              delay="4"
              preFix="+"
              />
            </span>
            <span>members joined</span>
          </div>
          <div>
          <span>
              <NumberCounter
              end={50}
              start={35}
              delay="4"
              preFix="+"
              />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
       <div className="herobtns">
       <button className="btn getstarted">
            Get Started
        </button>
        <button className="btn learn">
            Learn more
        </button>
       </div>
      </div>

      <div className="rightheader">
        <button className="btn joinbtn">Join Now</button>
        <motion.div
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
         className="heartrate">
        <i class='bx bxs-heart'></i>
        <span>Heart Rate</span>
        <span>116bpm</span>
        </motion.div>


      </div>

      {/* hero images */}
    <img src={heroimg} alt="" className="heroimage" />
    <motion.img
    initial={{right:"11rem"}}
    whileInView={{right:"20rem"}}
    transition={transition}
    src={heroback} alt="" className="heroimageback" />


        {/* calories */}
        <motion.div
        initial={{right:"37rem"}}
        whileInView={{right:"28rem"}}
        transition={transition}
        className="calories">
            <img src={calorie} alt="" />
          <div>
          <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
    </div>
  );
};

export default Hero;
