interface FilterButtonProps {
  selected?: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ selected }) => {
  return (
    <div
      style={{
        borderColor: selected ? "#fc6e20" : "#e1e1e1",
        boxShadow: selected
          ? "0px 0px 20px 1px rgba(252, 110, 32, 0.2)"
          : "0px 0px 0px 0px",
      }}
      className={`cursor-pointer px-[13px] py-[10px] border-2 ] rounded-[8px] bg-white z-10 font-semibold text-[15px] whitespace-nowrap`}
    >
      All Products
    </div>
  );
};

export default FilterButton;
