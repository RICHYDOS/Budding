import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "../../Images/ProductPage/shopping-bag.svg";

const CartIcon = () => {
  const navigate = useNavigate();
  return (
    <figure className="relative" onClick={() => navigate("/cart")}>
      <p className="text-[14px] w-[18px] h-[18px] rounded-full bg-[#fc6e20] flex items-center justify-center text-white absolute right-0">0</p>
      <img className="cursor-pointer w-[35px]" src={ShoppingCartIcon} />
    </figure>
  );
};

export default CartIcon;
