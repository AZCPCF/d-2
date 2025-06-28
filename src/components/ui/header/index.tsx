import { CategoryInterface, ImageFromApiInterface } from "@/interfaces";
import { fetcher } from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import HeaderButtons from "./buttons";
import MobileNavbar from "./mobile-navbar";
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
  categories: CategoryInterface[];
};
export default async function Header() {
  const res = await fetcher<NavbarRequestType>({ endpoint: "navbar" });
  return (
    <header className="shadow-md relative bg-white">
      <TopBanner banner={res.banner} />
      <div className="w-full flex gap-5 max-[500px]:px-2 max-[500px]:gap-2 p-5 items-center justify-between">
        <div className="flex  items-center max-[500px]:gap-3 gap-5">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              className="max-w-[70px] max-md:w-[50px]"
              width={352}
              height={352}
              alt="d2-header-logo"
            />
          </Link>
          <MobileNavbar categories={res.categories} />
          <HeaderSearchInput />
        </div>
        <HeaderNavbar categories={res.categories} />
        <HeaderButtons />
      </div>
    </header>
  );
}
