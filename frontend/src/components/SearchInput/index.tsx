import { useState } from "react";
import SearchIcon from "../../Images/SearchInput/search-icon.svg";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="bg-[#f3f3f3] w-full py-[13px] px-[13px] rounded-[18px] shadow-[0_0_2px_1px_rgba(0,0,0,0.1)]">
      <div className="flex gap-[10px] items-center">
        <figure>
          <img className="w-[20px]" src={SearchIcon} />
        </figure>
              <input
                  placeholder="Search Products"
          className="w-full bg-transparent focus:outline-none placeholder:text-[#ccc] text-"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
