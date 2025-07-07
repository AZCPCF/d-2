import NextImage from "@/components/ui/image";
import Link from "next/link";

export default function EnamadLogo() {
  const enamadUrl = "https://trustseal.enamad.ir/?id=527519&Code=rob4yxOTAgWtwcl4QWQ1lXSxyRO3CRxz";
  const enamadLogoUrl = "https://trustseal.enamad.ir/logo.aspx?id=527519&Code=rob4yxOTAgWtwcl4QWQ1lXSxyRO3CRxz";

  return (
    <Link
      href={enamadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex justify-center items-center py-20 max-lg:py-10"
    >
      <NextImage
        url={enamadLogoUrl}
        alt="enamad-logo"
        className="w-[100px]"
        width={100}
        height={100}
      />
    </Link>
  );
}
