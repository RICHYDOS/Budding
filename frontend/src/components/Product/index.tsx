const Product = () => {
  return (
    <div>
      <div className="w-full object-cover shadow-[0_0_30px_1px_rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden pt-[10px]">
        <figure>
          <img
            className="h-[130px] w-full object-cover"
            src="https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1"
          />
        </figure>
        <article className="px-[10px] pb-[10px]">
          <p className="text-[18px] font-bold text-[#3a3a3a] w-full overflow-hidden text-ellipsis whitespace-nowrap">Yummy Yellow</p>
          <p className="text-[14px] text-[#c8c8ca] leading-[17px] mt-[8px]">
            Cute protective yellow bear
          </p>
          <p className="mt-[8px] text-[19px] font-semibold">$800</p>
        </article>
      </div>
    </div>
  );
};

export default Product;
