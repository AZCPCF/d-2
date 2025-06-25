import NextImage from "@/components/image";
import Link from "next/link";

export default function EnamadLogo() {
  return (
    <Link
      href={
        "https://trustseal.enamad.ir/?id=527519&Code=rob4yxOTAgWtwcl4QWQ1lXSxyRO3CRxz"
      }
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex justify-center items-center py-20 max-lg:py-10"
    >
      <NextImage
        url={
          "https://trustseal.enamad.ir/logo.aspx?id=527519&Code=rob4yxOTAgWtwcl4QWQ1lXSxyRO3CRxz"
        }
        alt="enamad-logo"
        className="w-[100px] brightness-0"
        width={100}
        height={100}
      />
    </Link>
  );
}
