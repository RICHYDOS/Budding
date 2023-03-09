import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ProductProps {
  _id: string;
  image: string;
  shortDescription: string;
  name: string;
  price: number;
  index: number;
  onClick: () => void;
  nextImageId: string;
}

const Product: React.FC<ProductProps> = ({
  image,
  shortDescription,
  name,
  price,
  _id,
  index,
  onClick,
  nextImageId,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          nextImageId != _id
            ? {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4, delay: 0.4 + 0.05 * index },
              }
            : { opacity: 0, scale: 0.95 }
        }
        onClick={() => {
          onClick();

          setTimeout(() => navigate(`/product/${_id}`), 300);
        }}
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer w-full object-cover shadow-[0_0_30px_1px_rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden"
      >
        <figure className="h-[130px] w-full">
          {nextImageId != _id && (
            <motion.img
              layoutId={_id}
              className="w-full h-full object-cover"
              src={image}
            />
          )}
        </figure>
        <article className="px-[10px] pb-[10px]">
          <p className="text-[18px] font-bold text-[#3a3a3a] w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </p>
          <p className="text-[14px] text-[#c8c8ca] leading-[17px] mt-[8px]">
            {shortDescription}
          </p>
          <p className="mt-[8px] text-[19px] font-semibold">${price}</p>
        </article>
      </motion.div>
    </div>
  );
};

export default Product;
