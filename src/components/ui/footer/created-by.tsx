
import NextImage from "@/components/image";
import Link from "next/link";

export default function CreatedByInFooter() {
  return (
    <Link
      href="https://www.dadekavweb.ir"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full dark:bg-slate-800 dark:text-white justify-center flex p-4 text-2xl items-center gap-2 max-md:pb-24"
    >
      <NextImage
        url="/images/dadekavweb-logo.webp"
        alt="dadekavweb-logo"
        className="!max-w-[57px]"
        width={57}
        height={50}
      />
      طراحی شده توسط داده کاو وب
    </Link>
  );
}
