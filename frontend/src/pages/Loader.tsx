import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();
  const [textAnimationFinished, setTextAnimationFinished] = useState(false);
  return (
    <main>
      <motion.div
        onAnimationComplete={() => navigate("/signup")}
        animate={
          textAnimationFinished
            ? {
                height: 0,
                transition: { delay: 0.4, duration: 0.6, ease: easeOut },
              }
            : {}
        }
        className="w-full h-[100vh] fixed top-0 bg-[#fc6e20] flex items-center justify-center"
      >
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 90 }}
            animate={{
              y: [90, 0, 0, 0, -90],
              transition: { duration: 2, ease: "easeOut" },
            }}
            onAnimationComplete={() => setTextAnimationFinished(true)}
            className="text-[48px] font-bold text-white"
          >
            Budding.
          </motion.p>
        </div>
      </motion.div>
    </main>
  );
};

export default Loader;
