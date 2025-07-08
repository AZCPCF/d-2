import NextImage from "@/components/ui/image";
import Link from "next/link";

export default function CreatedByInFooter() {
  return (
    <Link
      href="https://www.dadekavweb.ir"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full dark:bg-slate-800 dark:text-white justify-center flex p-4 text-2xl items-center gap-2 max-md:mb-20"
    >
      <NextImage
        url="/images/dadekavweb-logo.webp"
        alt="dadekavweb-logo"
        width={57}
        height={50}
      />
      طراحی شده توسط داده کاو وب
    </Link>
  );
}
