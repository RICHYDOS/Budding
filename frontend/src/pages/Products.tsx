import { useNavigate } from "react-router-dom";
import FilterButton from "../components/FilterButton";
import NavButton from "../components/NavBar";
import Product from "../components/Product";
import SearchInput from "../components/SearchInput";
import SortButton from "../components/SortButton";
import ShoppingCartIcon from "../Images/ProductPage/shopping-bag.svg";
import { useState } from "react";

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
  ]);
  return (
    <main className="overflow-hidden lg:overflow-visible pb-[30px] lg:max-w-[1360px] mx-auto">
      <nav className="px-[20px] pb-[10px] pt-[20px] flex justify-between items-center text-[18px] font-medium lg:fixed lg:left-0 lg:right-0 lg:top-0 mx-w-[1360px] bg-white">
        <NavButton />
        <p>Hi, Ronald</p>
        <figure onClick={() => navigate("/cart")}>
          <img className="w-[35px]" src={ShoppingCartIcon} />
        </figure>
      </nav>
      <header className="px-[20px] lg:mt-[80px]">
        <h1 className="text-[24px] font-medium">
          Our <br className="lg:hidden" />{" "}
          <span className="font-bold">Products</span>
        </h1>
      </header>
      <section className="px-[20px] mt-[20px] flex gap-[20px]">
        <SearchInput searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        <SortButton />
      </section>

      <section className="py-[20px] px-[20px] overflow-x-scroll horizontal-scroll">
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
      </section>
      <section className="px-[20px] grid grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[40px]">
        {/* For the actual products */}
        {products.map((product) => (
          <Product
            image={product.image}
            name={product.name}
            shortDescription={product.description.short}
            price={product.price}
            _id={product._id}
          />
        ))}
      </section>
    </main>
  );
};

export default ProductsPage;
