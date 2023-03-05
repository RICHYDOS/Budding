import SizeButton from "../components/SizeButton";

const ProductPage = () => {
  return (
    <main>
      <nav></nav>
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
              <SizeButton size={size} selected={index == 0 } />
          ))}
        </div>
      </section>
      <article className="px-[20px] mt-[20px]">
        <p>
          This is a stylish everyday case with that looks like a pineapple but
          also a person, you can call it the Yellow Yummy. Made with protective
          rubber, the Yellow Yummy is sure to keep your airpods safe from any
          fall.
        </p>
        {/* <div className="mt-[20px]">
                  <h2 className="text-[18px] text-[#c8c8ca]">Price</h2>
                  <p className="text-[24px] font-bold">$800</p>
        </div> */}
      </article>
    </main>
  );
};

export default ProductPage;
