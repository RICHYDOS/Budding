import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { relative } from "path";
import { useNavigate } from "react-router-dom";

const NavButton = () => {
    const [navButtonIsOpen, setNavButtonIsOpen] = useState(false);
    const navigate = useNavigate();
  return (
    <>
      <motion.div
        onClick={() => setNavButtonIsOpen(true)}
        whileTap={{ scale: 0.95 }}
        // style={{position: navButtonIsOpen ? "fixed" : "relative"}}
        
        className="cursor-pointer w-[40px] h-[40px] shadow-[0_0_30px_1px_rgba(0,0,0,0.2)] rounded-[12px] overflow-hidden flex flex-col items-center justify-center bg-white"
      >
        <div className="flex flex-col gap-[3px]">
          <div className="w-[14px] h-[2px] rounded-full bg-black"></div>
          <div className="w-[18px] h-[2px] rounded-full bg-black"></div>
          <div className="w-[22px] h-[2px] rounded-full bg-black"></div>
        </div>
      </motion.div>
      <AnimatePresence>
        {navButtonIsOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 bottom-0 right-0 left-0 bg-[rgba(20,20,20,0.4)] z-20 "
            ></motion.div>
            <div
              onClick={() => setNavButtonIsOpen(false)}
              className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-[21] cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30, }}
                              animate={{ opacity: 1, scale: 1, y: 0, transition: { delay: 0.2 } }}
                              exit={{ opacity: 0, scale: 0.9, y: 30, }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[300px] h-[300px] rounded-[50px] bg-white flex items-center justify-center flex-col text-[24px] font-medium gap-[15px] cursor-default"
              >
                <p className="cursor-pointer">SIGN OUT</p>
                <p onClick={() => navigate("/cart")} className="cursor-pointer">VIEW CART</p>
                <p className="cursor-pointer">VIEW REPO</p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavButton;
