import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <div className="border-b border-[#F0F3F7] h-[80px] fixed top-0 w-full z-[99999] bg-white">
      <HeaderSearch />
    </div>
  );
}
