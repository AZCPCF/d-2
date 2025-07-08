import NextImage from "@/components/image";
import { NavbarRequestType } from ".";

export default function TopBanner({ banner }: Pick<NavbarRequestType, "banner">) {
  return (
    <div>
      {/* Desktop/Large screen banner */}
      <NextImage
        className="w-full"
        wrapperClassName="max-md:hidden"
        {...banner.image}
        alt={banner.image.alt || "banner"}
      />
      {/* Mobile banner */}
      <NextImage
        className="w-full"
        wrapperClassName="max-md:block hidden"
        {...banner.image_phone}
        alt={banner.image_phone.alt || "banner-phone"}
      />
    </div>
  );
}
