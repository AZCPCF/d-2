import NextImage from "@/components/ui/image";
import Link from "next/link";

export default function CreatedByInFooter() {
  return (
    <Link href={'https://www.dadekavweb.ir'} target="_blank" className="w-full bg-white justify-center flex p-4 text-2xl items-center gap-2">
      <NextImage url="/images/dadekavweb-logo.webp" alt="dadekavweb-logo" width={57} height={50}/>
      طراحی شده توسط داده کاو وب
    </Link>
  );
}
