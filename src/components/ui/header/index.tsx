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
  // Fetch navbar data (banner + categories)
  const { data: res } = await fetcher<NavbarRequestType>({
    endpoint: "navbar",
  });

  return (
    <header className="shadow-md relative bg-background">
      {/* Top banner section */}
      <TopBanner banner={res.banner} />

      {/* Main header row */}
      <div className="w-full flex gap-5 max-[500px]:px-2 max-[500px]:gap-2 p-5 items-center justify-between">
        {/* Left side: logo, mobile navbar toggle, search input */}
        <div className="flex items-center max-[500px]:gap-3 gap-5">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="D2 header logo"
              width={352}
              height={352}
              className="max-w-[70px] max-md:w-[50px]"
              priority
            />
          </Link>

          <MobileNavbar categories={res.categories} />

          <HeaderSearchInput />
        </div>

        {/* Desktop navbar */}
        <HeaderNavbar categories={res.categories} />

        {/* Header buttons (cart, user) */}
        <HeaderButtons />
      </div>
    </header>
  );
}
