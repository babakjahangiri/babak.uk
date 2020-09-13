import React, { useEffect, useRef, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { Header } from "./../../components";
import "./homepage.scss";

import IntroPic from "./../../images/gray-typewriter.png";
import frontendPic from "./../../images/frontend.png";
import backendPic from "./../../images/backend.png";

const HomePage = () => {
  //const [pos, setPos] = useState(false);

  const { scrollY } = useViewportScroll();
  //const ref = useRef();

  const introOpacity = useTransform(scrollY, [400, 500], [0.1, 1]);
  const introPicPosition = useTransform(scrollY, [250, 400], [1000, 0], {
    clamp: true,
  });
  const introTextPosition = useTransform(scrollY, [300, 500], [-900, 0], {
    clamp: true,
  });

  const ecommerceBgPos = useTransform(scrollY, [900, 1000], [-1000, 0], {
    clamp: true,
  });

  const backendBgPos = useTransform(scrollY, [1500, 1600], [-1000, 0], {
    clamp: true,
  });

  const ecommerceTitleScale = useTransform(scrollY, [700, 900], [5, 1], {
    clamp: true,
  });

  const frontendPicPos = useTransform(scrollY, [800, 1100], [-1000, 0], {
    clamp: true,
  });

  const ecommerceTextOpacity = useTransform(scrollY, [1100, 1200], [0, 1], {
    clamp: true,
  });

  const backendTitleScale = useTransform(scrollY, [1500, 1600], [5, 1], {
    clamp: true,
  });

  // useEffect(() => {
  //   scrollY.onChange((e) => (e.current > 1200 ? setPos(true) : null));
  // });

  return (
    <React.Fragment>
      <Header />
      <section className="section__intro">
        <div>
          {/* <div classname="section__intro-block"></div> */}
          <motion.h2
            initial={{ opacity: 0.1 }}
            style={{ opacity: introOpacity }}
          >
            Babak's web design sets you apart
          </motion.h2>
          <motion.p style={{ x: introTextPosition }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur delectus fugit soluta deserunt possimus cumque eos,
            quod quasi provident fuga ad pariatur, nesciunt voluptatibus quidem
            quae aut accusantium ipsam asperiores!
          </motion.p>
        </div>
        <motion.div initial={{ x: 1000 }} style={{ x: introPicPosition }}>
          <img src={IntroPic} alt="type writer machine" />
        </motion.div>
      </section>

      <section className="section-container">
        <div className="section-title-container">
          <motion.p style={{ x: ecommerceBgPos }}>E-Commerce </motion.p>

          <div>&nbsp;</div>
          <motion.h3 style={{ scale: ecommerceTitleScale }}>
            E-Commerce Design
          </motion.h3>
        </div>
        <div className="section-content-container">
          <motion.div style={{ x: frontendPicPos }}>
            <img src={frontendPic} alt="E-commerce Frontend design" />
          </motion.div>
          <div>
            <motion.p
              style={{ opacity: ecommerceTextOpacity }}
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="section-title-container">
          <motion.p style={{ x: backendBgPos }}>Back-end</motion.p>
          <div>&nbsp;</div>
          <motion.h3 style={{ scale: backendTitleScale }}>
            Back-end API Design
          </motion.h3>
        </div>
        <div className="section-content-container">
          <div>
            <img src={backendPic} alt="E-commerce Frontend design" />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
