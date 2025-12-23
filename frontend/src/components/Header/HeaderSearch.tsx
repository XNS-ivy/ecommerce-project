import {
  cartIcon,
  searchIcon,
} from "../../assets/icons";
import { ISLImage } from "../../assets/images";

export default function HeaderSearch() {
  return (
    <div className="bg-white">
      <div className="px-9 py-3 flex items-center justify-between gap-x-6 fixed top-1 left-0 right-0 bg-white z-50">

        {/* LEFT SECTION: Logo + ISL */}
        <div className="flex items-center gap-3 w-[100px]">
          <a href="#" className="cursor-pointer flex items-center gap-3 pt-1">
            <img src={ISLImage} alt="ISL-logo" className="h-10" />
            <h1 className="text-3xl font-bold text-[#00CFFF]">ISL</h1>
          </a>
        </div>

        {/* MIDDLE SECTION: Category + Search */}
        <div className="flex items-center gap-x-4 flex-1">

          {/* Category Button */}
          <button className="p-2 hover:bg-[#F0F3F7] rounded-lg transition text-sm">
            Category
          </button>

          {/* Search Input */}
          <div className="relative w-full">
            <img
              src={searchIcon}
              alt="Search"
              className="w-5 absolute top-2.5 left-3 opacity-70"
            />
            <input
              type="text"
              placeholder="Search in ISL"
              className="border border-[#8d96aa] rounded-lg p-2 pl-10 text-sm w-full 
              focus:outline-none focus:border-[#00CFFF] transition"
            />
          </div>
        </div>

        {/* RIGHT SECTION: Cart + Auth */}
        <div className="flex items-center gap-x-4">
          <button className="p-2 hover:bg-[#F0F3F7] rounded-lg transition w-10">
            <img src={cartIcon} alt="Cart" className="w-full" />
          </button>

          <div className="w-[1px] h-7 bg-[#E4EBF5]"></div>

          <a
            href="#"
            className="px-3 py-1.5 border border-[#00CFFF] rounded-lg font-bold text-[#00CFFF] text-sm hover:bg-[#F0FDF7] transition"
          >
            Login
          </a>

          <a
            href="#"
            className="px-3 py-1.5 bg-[#00CFFF] rounded-lg font-bold text-white text-sm hover:bg-[#15b0d4] transition"
          >
            Register
          </a>
        </div>

      </div>
    </div>
  );
}