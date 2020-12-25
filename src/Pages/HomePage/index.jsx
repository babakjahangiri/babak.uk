import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { Header } from "./../../components";
import "./homepage.scss";

import IntroPic from "./../../images/gray-typewriter.png";
import frontendPic from "./../../images/frontend.png";
import backendPic from "./../../images/backend.png";

const HomePage = () => {
  const { scrollY } = useViewportScroll();

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

  const ecommerceTitleScale = useTransform(scrollY, [700, 900], [5, 1], {
    clamp: true,
  });

  const frontendPicPos = useTransform(scrollY, [800, 1100], [-1000, 0], {
    clamp: true,
  });

  const ecommerceTextOpacity = useTransform(scrollY, [1000, 1200], [0, 1], {
    clamp: true,
  });

  const backendBgPos = useTransform(scrollY, [1500, 1700], [-1000, 0], {
    clamp: true,
  });
  const backendTitleScale = useTransform(scrollY, [1500, 1600], [5, 1], {
    clamp: true,
  });

  const backendPicPos = useTransform(scrollY, [1700, 2000], [-1000, 0], {
    clamp: true,
  });

  const backendTextOpacity = useTransform(scrollY, [1800, 2000], [0, 1], {
    clamp: true,
  });

  return (
    <React.Fragment>
      <Header />
      <section className="section__intro">
        <div>
          <div classname="section__intro-block"></div>
          <motion.h2
            initial={{ opacity: 0.1 }}
            style={{ opacity: introOpacity }}
          >
            Babak's web design sets you apart
          </motion.h2>
          <motion.p style={{ x: introTextPosition}}>
            An elegant design is not only about the appearance and how does your website looks.
            One of the aspects of a good design is to make a useful product that builds a good relationship
            with your customers.It has to satisfy certain criteria,not only functional but also
            psychological and aesthetic.I offer simple website design with a minimalist approach. 
          </motion.p>
        </div>
        <motion.div initial={{ x: 1000 }} style={{ x: introPicPosition}}>
          <img src={IntroPic} alt="type writer machine"/>
        </motion.div>
      </section>

      <section className="section-container">
        <div className="section-title-container">
          {/* <motion.p style={{ x: ecommerceBgPos }}>Frontend </motion.p>
          <div>&nbsp;</div>
          <motion.h3 style={{ scale: ecommerceTitleScale }}>
            Frontend Design
          </motion.h3> */}
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
          {/* <motion.p style={{ x: backendBgPos }}>Back-end</motion.p>
          <div>&nbsp;</div>
          <motion.h3 style={{ scale: backendTitleScale }}>
            Backend API
          </motion.h3> */}
        </div>
        <div className="section-content-container">
          <motion.div style={{ x: backendPicPos }}>
            <img src={backendPic} alt="Backend API Development" />
          </motion.div>
          <div>
            <motion.p
              style={{ opacity: backendTextOpacity }}
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
    </React.Fragment>
  );
};

export default HomePage;
