import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  _id: string;
  image: string;
  shortDescription: string;
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ image, shortDescription, name, price, _id }) => {
  const navigate = useNavigate();
  return (
    <div>
      <motion.div onClick={() => navigate(`/product/${_id}`)} whileHover={{scale: 1.05}} className="cursor-pointer w-full object-cover shadow-[0_0_30px_1px_rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden pt-[10px]">
        <figure>
          <img
            className="h-[130px] w-full object-cover"
            src={image}
          />
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
