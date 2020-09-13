import React from "react";
import "./header-right.scss";
import { motion } from "framer-motion";

const HeaderRight = () => {
  return (
    <div className="header__rightContainer">
      <div className="header__rightone">
        <div>
          <motion.p
            initial={{ scale: 1.5 }}
            animate={{ scale: 1, x: 1 }}
            transition={{ delay: 0.5, duration: 1, type: "tween" }}
          >
            Simplicity
          </motion.p>
        </div>

        <motion.div
          className="davinciquote__container"
          initial={{ opacity: -1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <p>is the</p>
          <p>ultimate</p>
          <p>sophistication</p>
          <p>leonardo da vinci</p>
        </motion.div>
        <div>
          <div className="header__right-downblock"></div>
        </div>
      </div>
      <div className="header__righttwo">
        <div className="header_right-socialblock">
          <a href="https://github.com/babakjahangiri" title="Github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://dribbble.com/Babak-uk" title="Dribble">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
