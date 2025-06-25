import Image from "next/image";
import EnamadLogo from "./enamal-logo";
import FooterLinks from "./links";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-primary-main grid grid-cols-12 gap-8 max-sm:gap-4 p-10 max-sm:p-5 font-kalameh">
        <div className="col-span-4 flex font-kalameh text-xl flex-wrap items-center justify-center gap-10 max-lg:col-span-full">
          <Image
            src="/images/logo.png"
            width={352}
            className="w-[120px] brightness-0"
            height={352}
            alt="d2-footer-logo"
          />
          <p>
            پوشاک D2 با بیش از دو دهه سابقه فعالیت در زمینه تولید و عرضه پوشاک
            مردانه و بچگانه با پایبندی به دو اصل کلیدی، ۷ روز ضمانت بازگشت کالا
            و تضمین اصل‌بودن کالا، موفق شده ،به یکی از بهترین فروشگاه اینترنتی
            ایران تبدیل شود.و ما به جرئت میتونیم بگیم که از فروشگاه ما دست خالی
            بیرون نمیرید و خرید لذت بخشی را تجربه میکنید.
          </p>
        </div>
        <div className="col-span-1 max-lg:hidden"></div>
        <FooterLinks />
        <div className="w-full flex flex-wrap col-span-3 font-kalameh text-lg justify-between flex-col items-center max-lg:col-span-full">
          <EnamadLogo />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
