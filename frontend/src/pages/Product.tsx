import SizeButton from "../components/SizeButton";
import BackArrowIcon from "../Images/ProductPage/backArrowIcon.svg";
import ShoppingCartIcon from "../Images/ProductPage/shopping-bag.svg";
import AddIcon from "../Images/ProductPage/add.svg";
import SubtractIcon from "../Images/ProductPage/subtract.png";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ProductType } from "./Products";
import server from "../Utils/AxiosInstance";
import { ProductContext } from "../Context/ProductContext";
import CartIcon from "../components/CartIcon";

const ProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { productData } = useContext(ProductContext);
  console.log(productData);
  const product: ProductType = productData?.data?.find(
    (product: ProductType) => product._id == params._id
  );
  // const {isLoading, data}= useQuery(["product",  `${params._id}`], () => server.get(`/products/${params._id}`))
  const [selectedSize, setSelectedSize] = useState("2ND GEN");
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [productCount, setProductCount] = useState(0);
  const addItemToCart = () => {
    setProductCount(productCount + 1);
  };
  const removeItemFromCart = () => {
    setProductCount(productCount - 1);
  };

  return (
    <motion.main exit={{ opacity: 0 }} className="pb-[30px]">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-[20px] mt-[20px] justify-between flex"
      >
        <figure onClick={() => navigate(-1)}>
          <img className="w-[35px] cursor-pointer" src={BackArrowIcon} />
        </figure>
        <CartIcon />
      </motion.nav>
      <div className="flex flex-col lg:flex-row lg:mt-[100px] ">
        <figure className="lg:w-[40%]">
          <motion.img
            className="w-full max-w-[350px] lg:max-w-[450px] mx-auto h-[300px] object-cover"
            src={product.product_image}
          />
        </figure>
        <motion.section
          className="lg:w-[50%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <header className="px-[20px]">
            <h1 className="text-[28px] font-bold">{product.name}</h1>
          </header>
          <section className="mt-[20px] px-[20px]">
            <div>
              <p className="text-[18px] font-semibold">Available Sizes</p>
            </div>
            <div className="flex gap-[20px] mt-[10px]">
              {["2ND GEN", "3RD GEN", "PRO"].map((size, index) => (
                <SizeButton
                  key={index}
                  size={size}
                  selected={selectedSize == size}
                  onClick={() => {
                    setSelectedSize(size);
                  }}
                />
              ))}
            </div>
          </section>
          <article className="px-[20px] mt-[20px]">
            <div>
              <p className="text-[18px] font-semibold">Description</p>
            </div>
            <p>{product.description.long}</p>
          </article>
          <section className="px-[20px] flex gap-[40px] items-end justify-between">
            <div className="mt-[20px]">
              <h2 className="text-[18px] text-[#c8c8ca]">Price</h2>
              <p className="text-[24px] font-bold">${product.price}</p>
            </div>
            {productCount == 0 && (
              <button
                // onClick={() => }
                style={{
                  boxShadow: "0px 0px 20px 1px rgba(252, 110, 32, 0.2)",
                }}
                className="w-full bg-[#fc6e20] h-[50px] text-white font-bold text-[18px] rounded-[25px]"
              >
                Add to cart
              </button>
            )}
            {productCount !== 0 && (
              <div className="flex justify-between w-full max-w-[180px] items-center">
                <motion.button
                  style={{
                    opacity: productCount == 0 ? 0.6 : 1,
                  }}
                  whileTap={productCount == 0 ? {} : { scale: 0.92 }}
                  onClick={removeItemFromCart}
                  whileHover={productCount == 0 ? {} : { scale: 1.02 }}
                  disabled={productCount == 0}
                  className="text-white text-[40px] w-[50px] h-[50px] bg-[#fc6e20] rounded-[25px] flex items-center justify-center"
                >
                  <img className="w-[20px] h-[20px]" src={SubtractIcon} />
                </motion.button>
                <p className="text-[24px] font-bold">{productCount}</p>
                <motion.button
                  onClick={addItemToCart}
                  whileTap={{ scale: 0.92 }}
                  whileHover={{ scale: 1.02 }}
                  className="text-white text-[40px] w-[50px] h-[50px] bg-[#fc6e20] rounded-[25px] flex items-center justify-center"
                >
                  <img className="w-[20px] h-[20px]" src={AddIcon} />
                </motion.button>
              </div>
            )}
          </section>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default ProductPage;
