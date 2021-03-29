import React from "react";
import { motion } from "framer-motion";

const Modal = ({ setSelectedImg, selectedImg }) => {
  // 사진을 눌렀을 때 스르륵 나오는 모션과 배경이 어두워지는 모셥
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" animate={{ y: 0 }} />
    </motion.div>
  );
};

export default Modal;
