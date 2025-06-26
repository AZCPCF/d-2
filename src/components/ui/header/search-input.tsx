import NextButton from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";

export default function HeaderSearchInput() {
  return (
    <NextButton
      className="bg-gray-100 h-max p-3 max-[500px]:p-1.5 outline-0 rounded-full max-lg:rounded-md  text-lg flex items-center text-[#727272] gap-2 hover:bg-gray-200 transition-colors duration-200"
      role="button"
      title={
        <>
          <span className="max-lg:hidden">جستجو محصول</span>
          <BiSearch fontSize={24} />
        </>
      }
    />
  );
}
