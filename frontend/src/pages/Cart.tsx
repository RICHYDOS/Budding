import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import TrashIcon from "../Images/CartPage/trashIcon.svg";
import BackArrowIcon from "../Images/ProductPage/backArrowIcon.svg";
import ShoppingCartIcon from "../Images/ProductPage/shopping-bag.svg";
import { motion } from "framer-motion";
import { useState } from "react";

declare const window: any;

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      _id: "1",
      name: "Yellow Yummy",
      price: 800,
      count: 0,
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
    {
      _id: "2",
      name: "Yellow Yummy",
      price: 800,
      count: 0,
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
    {
      _id: "3",
      name: "Yellow Yummy",
      price: 800,
      count: 0,
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
    {
      _id: "4",
      name: "Yellow Yummy",
      price: 800,
      count: 0,
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
  ]);
  const payKorapay = () => {
    window.Korapay.initialize({
      key: "pk_test_euaecms83G34AT5b2Lvj82m9Po4E2t5AQGRKcqhd",
      reference: "your-unique-reference",
      amount: 22000,
      currency: "USD",
      customer: {
        name: "John Doe",
        email: "john@doe.com",
      },
      notification_url: "https://example.com/webhook",
    });
  };

  return (
    <main className="px-[20px] pb-[40px] pt-[20px]">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        className="my-[20px] justify-between flex"
      >
        <figure onClick={() => navigate(-1)}>
          <img className="w-[35px]" src={BackArrowIcon} />
        </figure>
      </motion.nav>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4 } }}
        className="text-[24px] font-medium flex justify-between items-center"
      >
        <p>
          Shopping <br className={"lg:hidden"} />{" "}
          <span className="font-bold">Cart</span>
        </p>
        <figure>
          <img src={TrashIcon} />
        </figure>
      </motion.section>
      <section className="mt-[25px] flex flex-col gap-[20px]">
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            name={item.name}
            price={item.price}
            count={item.count}
            image={item.image}
            index={index}
            onAddItem={() => {}}
            onRemoveItem={() => {}}
          />
        ))}
      </section>
      <section>
        <div className="w-full h-[1px] bg-[#6c6e6e] opacity-30 mt-[45px] rounded-full"></div>
        <div className="flex justify-between mt-[20px] items-center">
          <p className="text-[#6c6e6e] text-[17px] font-medium">3 items</p>
          <p className="text-[19px] font-bold">$1,234</p>
        </div>
        <button
          onClick={payKorapay}
          className="w-full h-[50px] text-[20px] font-bold text-white bg-[#fc6e20] mt-[30px] rounded-full"
        >
          Proceed To Checkout
        </button>
      </section>
    </main>
  );
};

export default CartPage;
