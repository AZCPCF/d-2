import Image from "next/image";
import CreatedByInFooter from "./created-by";
import EnamadLogo from "./enamad-logo";
import FooterLinks from "./links";
import SocialLinksHeader from "./social-links";
import FooterDescription from "./description";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-primary-main/85 backdrop-blur-md text-white grid grid-cols-12 gap-8 max-sm:gap-4 p-10 max-sm:p-5 ">
        <div className="col-span-4 flex  text-xl flex-wrap items-center justify-center gap-10 max-lg:col-span-full">
          <Image
            src="/images/logo.png"
            width={352}
            className="w-[120px] brightness-0 invert-100"
            height={352}
            alt="d2-footer-logo"
          />
          <FooterDescription />
        </div>
        <div className="col-span-1 max-lg:hidden"></div>
        <FooterLinks />
        <div className="w-full flex flex-wrap col-span-3  text-lg justify-between flex-col items-center max-lg:col-span-full">
          <EnamadLogo />
          <SocialLinksHeader />
        </div>
      </div>
      <CreatedByInFooter />
    </footer>
  );
}
