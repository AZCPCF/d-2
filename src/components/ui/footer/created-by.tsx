import NextImage from "@/components/ui/image";

export default function CreatedByInFooter() {
  return (
    <div className="w-full bg-white justify-center flex p-4 text-2xl items-center gap-2">
      <NextImage url="/images/dadekavweb-logo.webp" alt="dadekavweb-logo" width={57} height={50}/>
      طراحی شده توسط داده کاو وب
    </div>
  );
}
