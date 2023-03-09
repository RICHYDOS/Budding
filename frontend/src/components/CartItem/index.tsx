import AddIcon from "../../Images/ProductPage/add.svg";
import SubtractIcon from "../../Images/ProductPage/subtract.png";

interface CartItemProps {
  name: string;
  price: number;
  count: number;
  index: number;
  image: string;
  onAddItem: () => void;
  onRemoveItem: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  count,
  image,
  index,
  onAddItem,
  onRemoveItem,
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-[20px] items-center w-full">
        <figure>
          <img
            className="w-[80px] min-w-[80px] h-[80px] shadow-lg rounded-[10px]"
            src={image}
          />
        </figure>
        <div className="flex flex-col w-full">
          <p className="text-[18px] font-bold">{name}</p>
          <div className="flex justify-between w-full">
            <p className="text-[19px] font-semibold">
              <span className="pr-[5px]">$</span>
              {price}
            </p>

            <div className="flex items-center gap-[10px]">
              <button className="bg-[#fc6e20] w-[25px] h-[25px] flex items-center justify-center rounded-full ">
                <img className="w-[15px] h-[15px]" src={SubtractIcon} />
              </button>
              <p className="text-[18px] font-medium">{count}</p>
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
