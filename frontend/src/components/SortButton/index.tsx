import SortImage from "../../Images/SortButton/sort.svg";

const SortButton = () => {
  return (
    <div className="h-[50px] min-w-[50px] flex items-center justify-center shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] rounded-[18px]">
      <img className="w-[18px] h-[18px]" src={SortImage} />
    </div>
  );
};

export default SortButton;
