import NextButton from "@/components/button";
import { CategoryInterface, ImageFromApiInterface } from "@/interfaces";
import { fetcher } from "@/lib/fetcher";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import HeaderButtons from "./buttons";
import HeaderNavbar from "./navbar";
import HeaderSearchInput from "./search-input";
import TopBanner from "./top-banner";
export type NavbarRequestType = {
  banner: {
    url: string;
    image: ImageFromApiInterface;
    image_phone: ImageFromApiInterface;
    alt: string;
  };
  categories: CategoryInterface &
    {
      sub_categories?: CategoryInterface[];
    }[];
};
export default async function Header() {
  const res = await fetcher<NavbarRequestType>({ endpoint: "navbar" });
  return (
    <header className="shadow-md relative">
      <TopBanner banner={res.banner} />
      <div className="w-full flex gap-5 max-[500px]:px-2 max-[500px]:gap-2 p-5 items-center justify-between">
        <div className="flex  items-center max-[500px]:gap-3 gap-5">
          <Image
            src="/images/logo.png"
            className="max-w-[70px] max-md:w-[50px]"
            width={352}
            height={352}
            alt="d2-header-logo"
          />
          <NextButton
            className="bg-gray-100 h-max p-3 max-[500px]:p-1.5 outline-0 rounded-md font-kalameh text-lg items-center text-[#727272] gap-2 hover:bg-gray-200 transition-colors duration-200 max-md:block hidden"
            role="button"
            title={<MdMenu fontSize={24} />}
          />
          <HeaderSearchInput />
        </div>
        <HeaderNavbar categories={res.categories} />
        <HeaderButtons />
      </div>
    </header>
  );
}
