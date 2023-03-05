import SizeButton from "../components/SizeButton";
import BackArrowIcon from "../Images/ProductPage/backArrowIcon.svg";
import ShoppingCartIcon from "../Images/ProductPage/shopping-bag.svg";
import AddIcon from "../Images/ProductPage/add.svg";
import SubtractIcon from "../Images/ProductPage/subtract.png";

const ProductPage = () => {
  return (
    <main className="pb-[30px]">
      <nav className="px-[20px] mt-[30px] justify-between flex">
        <figure>
          <img className="w-[35px]" src={BackArrowIcon} />
        </figure>
        <figure>
          <img className="w-[35px]" src={ShoppingCartIcon} />
        </figure>
      </nav>
      <figure>
        <img
          className="w-full max-w-[350px] mx-auto h-[300px] object-cover"
          src="https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1"
        />
      </figure>
      <header className="px-[20px]">
        <h1 className="text-[28px] font-bold">Yellow Yummy</h1>
      </header>
      <section className="mt-[20px] px-[20px]">
        <div>
          <p className="text-[18px] font-semibold">Available Sizes</p>
        </div>
        <div className="flex gap-[20px] mt-[10px]">
          {["2ND GEN", "3RD GEN", "PRO"].map((size, index) => (
            <SizeButton size={size} selected={index == 0} />
          ))}
        </div>
      </section>
      <article className="px-[20px] mt-[20px]">
        <div>
          <p className="text-[18px] font-semibold">Description</p>
        </div>
        <p>
          This is a stylish everyday case with that looks like a pineapple but
          also a person, you can call it the Yellow Yummy. Made with protective
          rubber, the Yellow Yummy is sure to keep your airpods safe from any
          fall.
        </p>
      </article>
      <section className="px-[20px] flex gap-[40px] items-end justify-between">
        <div className="mt-[20px]">
          <h2 className="text-[18px] text-[#c8c8ca]">Price</h2>
          <p className="text-[24px] font-bold">$800</p>
        </div>
        {/* <button
          style={{ boxShadow: "0px 0px 20px 1px rgba(252, 110, 32, 0.2)" }}
          className="w-full bg-[#fc6e20] h-[50px] text-white font-bold text-[18px] rounded-[25px]"
        >
          Add to cart
        </button> */}
        <div className="flex justify-between w-full max-w-[180px] items-center">
          <button className="text-white text-[40px] w-[50px] h-[50px] bg-[#fc6e20] rounded-[25px] flex items-center justify-center">
            <img className="w-[20px] h-[20px]" src={SubtractIcon} />
          </button>
          <p className="text-[24px] font-bold">9</p>
          <button className="text-white text-[40px] w-[50px] h-[50px] bg-[#fc6e20] rounded-[25px] flex items-center justify-center">
            <img className="w-[20px] h-[20px]" src={AddIcon} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
