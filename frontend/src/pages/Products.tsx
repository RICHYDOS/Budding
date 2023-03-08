import { useNavigate } from "react-router-dom";
import FilterButton from "../components/FilterButton";
import NavButton from "../components/NavBar";
import Product from "../components/Product";
import SearchInput from "../components/SearchInput";
import SortButton from "../components/SortButton";
import ShoppingCartIcon from "../Images/ProductPage/shopping-bag.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProductType {
  _id: string;
  name: string;
  description: {
    short: string;
    long: string;
  };
  price: number;
  tag: string;
  image: string;
}

const ProductsPage = () => {
  const navigate = useNavigate();
  const tags = ["All Products", "Cute", "Protective", "Regular"];
  const [selectedTag, setSelectedTag] = useState("All Products");
  const [searchFilter, setSearchFilter] = useState("");
  const [nextImageId, setNextImageId] = useState("");
  const [products, setProducts] = useState<ProductType[]>([
    {
      _id: "1",
      name: "Yellow Yummy",
      description: {
        short: "Cute protective yellow bear",
        long: "This is a stylish everyday case with that looks like a pineapple but also a person, you can call it the Yellow Yummy. Made with protective rubber, the Yellow Yummy is sure to keep your airpods safe from any fall.",
      },
      price: 6.79,
      tag: "Cute",
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
    {
      _id: "2",
      name: "Yellow Yummy",
      description: {
        short: "Cute protective yellow bear",
        long: "This is a stylish everyday case with that looks like a pineapple but also a person, you can call it the Yellow Yummy. Made with protective rubber, the Yellow Yummy is sure to keep your airpods safe from any fall.",
      },
      price: 6.79,
      tag: "Cute",
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
    {
      _id: "3",
      name: "Yellow Yummy",
      description: {
        short: "Cute protective yellow bear",
        long: "This is a stylish everyday case with that looks like a pineapple but also a person, you can call it the Yellow Yummy. Made with protective rubber, the Yellow Yummy is sure to keep your airpods safe from any fall.",
      },
      price: 6.79,
      tag: "Cute",
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
    {
      _id: "4",
      name: "Yellow Yummy",
      description: {
        short: "Cute protective yellow bear",
        long: "This is a stylish everyday case with that looks like a pineapple but also a person, you can call it the Yellow Yummy. Made with protective rubber, the Yellow Yummy is sure to keep your airpods safe from any fall.",
      },
      price: 6.79,
      tag: "Protective",
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
    {
      _id: "5",
      name: "Yellow Yummy",
      description: {
        short: "Cute protective yellow bear",
        long: "This is a stylish everyday case with that looks like a pineapple but also a person, you can call it the Yellow Yummy. Made with protective rubber, the Yellow Yummy is sure to keep your airpods safe from any fall.",
      },
      price: 6.79,
      tag: "Cute",
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
    {
      _id: "6",
      name: "Yellow Yummy",
      description: {
        short: "Cute protective yellow bear",
        long: "This is a stylish everyday case with that looks like a pineapple but also a person, you can call it the Yellow Yummy. Made with protective rubber, the Yellow Yummy is sure to keep your airpods safe from any fall.",
      },
      price: 6.79,
      tag: "Cute",
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
    {
      _id: "7",
      name: "Yellow Yummy",
      description: {
        short: "Cute protective yellow bear",
        long: "This is a stylish everyday case with that looks like a pineapple but also a person, you can call it the Yellow Yummy. Made with protective rubber, the Yellow Yummy is sure to keep your airpods safe from any fall.",
      },
      price: 6.79,
      tag: "Cute",
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
    {
      _id: "8",
      name: "Yellow Yummy",
      description: {
        short: "Cute protective yellow bear",
        long: "This is a stylish everyday case with that looks like a pineapple but also a person, you can call it the Yellow Yummy. Made with protective rubber, the Yellow Yummy is sure to keep your airpods safe from any fall.",
      },
      price: 6.79,
      tag: "Cute",
      image:
        "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main className="overflow-hidden lg:overflow-visible pb-[30px] lg:max-w-[1360px] mx-auto">
      {nextImageId && (
        <figure className="fixed top-0 left-0 right-0 bottom-0 w-full bg-white">
          <motion.img
            layoutId={nextImageId}
            className="w-full  max-w-[350px] lg:max-w-[450px] mt-[35px] lg:mt-[135px] mx-auto lg:mx-0 lg:left-[180px] h-[300px] object-cover z-10"
            src={products.find((item) => item._id == nextImageId)?.image}
          />
        </figure>
      )}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        className="px-[20px] pb-[10px] pt-[20px] flex justify-between items-center text-[18px] font-medium lg:fixed lg:left-0 lg:right-0 lg:top-0 mx-w-[1360px] bg-white"
      >
        <NavButton />
        <p>Hi, Ronald</p>
        <figure onClick={() => navigate("/cart")}>
          <img className="cursor-pointer w-[35px]" src={ShoppingCartIcon} />
        </figure>
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
          {tags.map((tagName) => (
            <FilterButton
              tagName={tagName}
              selected={tagName == selectedTag}
              onClick={() => setSelectedTag(tagName)}
            />
          ))}
        </div>
      </motion.section>
      <section className="px-[20px] grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[40px]">
        {/* For the actual products */}
        {products
          .filter((product) =>
            selectedTag == "All Products" ? true : product.tag == selectedTag
          )
          .filter((product) =>
            product.name.toLowerCase().includes(searchFilter)
          )
          .map((product, index) => (
            <Product
              key={index}
              index={index}
              image={product.image}
              name={product.name}
              shortDescription={product.description.short}
              price={product.price}
              _id={product._id}
              nextImageId={nextImageId}
              onClick={() => setNextImageId(product._id)}
            />
          ))}
      </section>
    </main>
  );
};

export default ProductsPage;
