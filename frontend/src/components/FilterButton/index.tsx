import { motion } from "framer-motion";

interface FilterButtonProps {
  selected?: boolean;
  tagName: string;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  selected,
  tagName,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{scale: 1.05}}
      onClick={onClick}
      style={{
        borderColor: selected ? "#fc6e20" : "#e1e1e1",
      }}
      className={`cursor-pointer px-[13px] py-[10px] border-2 ] rounded-[8px] bg-white font-semibold text-[15px] whitespace-nowrap transition-[200ms]`}
    >
      {tagName}
    </motion.div>
  );
};

export default FilterButton;
