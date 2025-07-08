import NextLink from "@/components/ui/link";
import { footerLinks } from "@/static";

export default function FooterLinks() {
  return (
    <>
      <div className="col-span-2 max-lg:col-span-6 flex justify-center flex-wrap items-center text-center max-lg:mt-8">
        <h1 className="text-4xl w-full">صفحات</h1>
        <ul className="!text-xl mt-5 flex flex-wrap gap-5 max-sm:gap-2">
          {footerLinks.main.map((link, i) => (
            <li key={i} className="w-full">
              <NextLink
                className="w-full hover:text-primary-800"
                href={link.href}
                label={link.label}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-2 max-lg:col-span-6 flex justify-center flex-wrap items-center text-center max-lg:mt-8">
        <h1 className="text-4xl w-full">سایر</h1>
        <ul className="!text-xl mt-5 flex flex-wrap *:w-full gap-5 max-sm:gap-2">
          {footerLinks.others.map((link, i) => (
            <li key={i}>
              <NextLink href={link.href} label={link.label} className="hover:text-primary-800" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
