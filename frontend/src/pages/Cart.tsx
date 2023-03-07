import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import TrashIcon from "../Images/CartPage/trashIcon.svg";
import BackArrowIcon from "../Images/ProductPage/backArrowIcon.svg";
import ShoppingCartIcon from "../Images/ProductPage/shopping-bag.svg";

const CartPage = () => {
  const navigate = useNavigate();
  return (
    <main className="px-[20px] pb-[40px] pt-[20px]">
      <nav className="my-[20px] justify-between flex">
        <figure onClick={() => navigate(-1)}>
          <img className="w-[35px]" src={BackArrowIcon} />
        </figure>
      </nav>
      <section className="text-[24px] font-medium flex justify-between items-center">
        <p>
          Shopping <br /> <span className="font-bold">Cart</span>
        </p>
        <figure>
          <img src={TrashIcon} />
        </figure>
      </section>
      <section className="mt-[25px] flex flex-col gap-[20px]">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </section>
      <section>
        <div className="w-full h-[1px] bg-[#6c6e6e] opacity-30 mt-[45px] rounded-full"></div>
        <div className="flex justify-between mt-[20px] items-center">
          <p className="text-[#6c6e6e] text-[17px] font-medium">3 items</p>
          <p className="text-[19px] font-bold">$1,234</p>
        </div>
        <button className="w-full h-[50px] text-[20px] font-bold text-white bg-[#fc6e20] mt-[30px] rounded-full">
          Proceed To Checkout
        </button>
      </section>
    </main>
  );
};

export default CartPage;
