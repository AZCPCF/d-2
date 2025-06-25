import NextLink from "@/components/ui/link";

const mainLinks = [
  { href: "t", label: "اخبار و مقالات" },
  { href: "t", label: "درباره ما" },
  { href: "t", label: "تماس با ما" },
  { href: "t", label: "گالری" },
  { href: "t", label: "سوالات متداول" },
];

const otherLinks = [
  { href: "t", label: "ورود" },
  { href: "t", label: "نحوه ثبت سفارش" },
  { href: "t", label: "حریم خصوصی" },
  { href: "t", label: "قوانین سایت" },
  { href: "t", label: "گواهی نامه ها" },
];
export default function FooterLinks() {
  return (
    <>
      <div className="col-span-2 max-lg:col-span-6 flex justify-center flex-wrap items-center text-center max-lg:mt-8">
        <h1 className="text-4xl w-full">صفحات</h1>
        <ul className="!text-xl mt-5 flex flex-wrap gap-5 max-sm:gap-2">
          {mainLinks.map((link, i) => (
            <li key={i} className="w-full">
              <NextLink
                className="hover:text-white w-full list-decimal"
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
          {otherLinks.map((link, i) => (
            <li key={i}>
              <NextLink
                className="hover:text-white"
                href={link.href}
                label={link.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
