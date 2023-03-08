import { motion } from "framer-motion";

interface SizeButtonProps {
  size: string;
  selected: boolean;
  onClick: () => void;
}

const SizeButton: React.FC<SizeButtonProps> = ({ size, selected, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      style={
        selected
          ? {
              borderColor: "#fc6e20",
              backgroundColor: "#fc6e20",
              color: "white",
            }
          : {}
      }
      className="transiton-all transition-[300ms] p-[10px] border-2 border-[#c8c8ca] rounded-[10px] font-medium cursor-pointer"
    >
      {size}
    </motion.div>
  );
};

export default SizeButton;
