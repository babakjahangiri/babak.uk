import React from "react";
import "./PageHeaderRight.scss";
import { motion } from "framer-motion";
import aboutImg from "./../../images/about.jpg";
import solutionsImg from "./../../images/solutions.jpg";

const PageHeaderRight = ({ title }) => {
  let headerImg = "";
  switch (title.toLowerCase()) {
    case "about":
      headerImg = aboutImg;
      break;
    case "contact":
      headerImg = aboutImg;
      break;
    case "projects":
      headerImg = aboutImg;
      break;
    case "solutions":
      headerImg = solutionsImg;
      break;
    default:
      headerImg = aboutImg;
      break;
  }

  return (
    <div className="pageheader__rightContainer">
      <div>
        <img
          src={headerImg}
          alt="Babak Jahangiri"
          className="pageheader-image"
        />
      </div>
      <div>
        <p>{title}</p>
        <div>
          <p className="header__right-downblock"></p>
        </div>
      </div>
    </div>
  );
};

export default PageHeaderRight;
