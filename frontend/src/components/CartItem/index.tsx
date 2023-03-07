import AddIcon from "../../Images/ProductPage/add.svg";
import SubtractIcon from "../../Images/ProductPage/subtract.png";

const CartItem = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-[20px] items-center w-full">
        <figure>
          <img
            className="w-[80px] min-w-[80px] h-[80px] shadow-lg rounded-[10px]"
            src={
              "https://litb-cgis.rightinthebox.com/images/384x384/202209/bps/product/inc/qyzneu1662460508307.jpg?fmt=webp&v=1"
            }
          />
        </figure>
        <div className="flex flex-col w-full">
          <p className="text-[18px] font-bold">Yellow Yummy</p>
          <div className="flex justify-between w-full">
            <p className="text-[19px] font-semibold">
              <span className="pr-[5px]">$</span>800
            </p>

            <div className="flex items-center gap-[10px]">
              <button className="bg-[#fc6e20] w-[25px] h-[25px] flex items-center justify-center rounded-full ">
                <img className="w-[15px] h-[15px]" src={SubtractIcon} />
              </button>
              <p className="text-[18px] font-medium">4</p>
              <button className="bg-[#fc6e20] w-[25px] h-[25px] flex items-center justify-center rounded-full ">
                <img className="w-[15px] h-[15px]" src={AddIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
