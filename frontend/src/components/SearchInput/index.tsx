import { useState } from "react";
import SearchIcon from "../../Images/SearchInput/search-icon.svg";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="bg-[#f3f3f3] w-full py-[13px] px-[10px] rounded-[18px]">
      <div className="flex gap-[10px] items-center">
        <figure>
          <img src={SearchIcon} />
        </figure>
        <input
          className="w-full bg-transparent focus:outline-none placeholder:text-[#ccc] text-"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
