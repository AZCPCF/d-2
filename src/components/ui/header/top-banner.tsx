import NextImage from "@/components/image";
import { NavbarRequestType } from ".";

export default function TopBanner(props: Pick<NavbarRequestType, "banner">) {
  return (
    <div>
      <NextImage
        className="w-full max-md:hidden"
        {...props.banner.image}
        alt={props.banner.image_phone.alt || "banner"}
      />
      <NextImage
        className="w-full max-md:block hidden"
        {...props.banner.image_phone}
        alt={props.banner.image_phone.alt || "banner-phone"}
      />
    </div>
  );
}
