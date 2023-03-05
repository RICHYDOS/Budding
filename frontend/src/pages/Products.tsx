import FilterButton from "../components/FilterButton";
import Product from "../components/Product";
import SearchInput from "../components/SearchInput";
import SortButton from "../components/SortButton";

const ProductsPage = () => {
  return (
    <main className="overflow-hidden pb-[30px]">
      <nav></nav>
      <header className="px-[20px]">
        <h1 className="text-[24px] font-medium">
          Our <br className="lg:hidden" />{" "}
          <span className="font-bold">Products</span>
        </h1>
      </header>
      <section className="px-[20px] mt-[20px] flex gap-[20px]">
        <SearchInput />
        <SortButton />
      </section>

      <section className="mt-[20px] px-[20px] overflow-x-scroll horizontal-scroll">
        {/* For Filtering by the tags */}
        <div className="flex gap-x-[15px] pr-[20px]">
          <FilterButton selected />
          <FilterButton />
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
      </section>
      <section className="px-[20px] mt-[20px] grid grid-cols-2 gap-[20px]">
        {/* For the actual products */}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </main>
  );
};

export default ProductsPage;
