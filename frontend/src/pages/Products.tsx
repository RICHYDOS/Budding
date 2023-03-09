import { useNavigate } from "react-router-dom";
import FilterButton from "../components/FilterButton";
import NavButton from "../components/NavBar";
import Product from "../components/Product";
import SearchInput from "../components/SearchInput";
import SortButton from "../components/SortButton";
import ShoppingCartIcon from "../Images/ProductPage/shopping-bag.svg";
import { createContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import server from "../Utils/AxiosInstance";
import { useQuery } from "react-query";
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import CartIcon from "../components/CartIcon";

export interface ProductType {
  _id: string;
  name: string;
  description: {
    short: string;
    long: string;
  };
  price: number;
  tag: string;
  product_image: string;
}

const ProductsPage = () => {
  const navigate = useNavigate();
  const tags = [
    "All Products",
    "trendy",
    "minimalist",
    "designer",
    "protective",
  ];
  const { productDataIsLoading, productData } = useContext(ProductContext);
  const [selectedTag, setSelectedTag] = useState("All Products");
  const [searchFilter, setSearchFilter] = useState("");
  const [nextImageId, setNextImageId] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    if (!user) navigate("/login");
  });
  return (
    <main className="overflow-hidden lg:overflow-visible pb-[30px] lg:max-w-[1360px] mx-auto">
      {nextImageId && (
        <figure className="fixed top-0 left-0 right-0 bottom-0 w-full bg-white">
          <motion.img
            layoutId={nextImageId}
            className="w-full  max-w-[350px] lg:max-w-[450px] mt-[35px] lg:mt-[135px] mx-auto lg:mx-0 lg:left-[180px] h-[300px] object-cover z-10"
            src={
              productData?.data.find(
                (item: ProductType) => item._id == nextImageId
              )?.product_image
            }
          />
        </figure>
      )}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        className="px-[20px] pb-[10px] pt-[20px] flex justify-between items-center text-[18px] font-medium lg:fixed lg:left-0 lg:right-0 lg:top-0 mx-w-[1360px] bg-white"
      >
        <NavButton />
        <p>Hi, {user.firstname}</p>
        <CartIcon />
      </motion.nav>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        className="px-[20px] lg:mt-[80px]"
      >
        <h1 className="text-[24px] font-medium">
          Our <br className="lg:hidden" />{" "}
          <span className="font-bold">Products</span>
        </h1>
      </motion.header>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        className="px-[20px] mt-[20px] flex gap-[20px]"
      >
        <SearchInput
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <SortButton />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        className="py-[20px] px-[20px] overflow-x-scroll horizontal-scroll"
      >
        {/* For Filtering by the tags */}
        <div className="flex gap-x-[15px] pr-[20px]">
          {tags.map((tagName, index) => (
            <FilterButton
              key={index}
              tagName={tagName}
              selected={tagName == selectedTag}
              onClick={() => setSelectedTag(tagName)}
            />
          ))}
        </div>
      </motion.section>
      {!productDataIsLoading && (
        <section className="px-[20px] grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[40px]">
          {/* For the actual products */}
          {productData?.data
            .filter((product: ProductType) =>
              selectedTag == "All Products"
                ? true
                : product.tag.includes(selectedTag)
            )
            .filter((product: ProductType) =>
              product.name.toLowerCase().includes(searchFilter)
            )
            .map((product: ProductType, index: number) => (
              <Product
                key={index}
                index={index}
                image={product.product_image}
                name={product.name}
                shortDescription={product.description.short}
                price={product.price}
                _id={product._id}
                nextImageId={nextImageId}
                onClick={() => setNextImageId(product._id)}
              />
            ))}
        </section>
      )}
      {productDataIsLoading && (
        <section className="w-full h-[400px] flex items-center justify-center">
          Loading...
        </section>
      )}
    </main>
  );
};

export default ProductsPage;
