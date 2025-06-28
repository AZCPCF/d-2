import NextImage from "@/components/ui/image";
import SocialLinks from "@/components/ui/social-links";
import { AboutUsRequestInterface } from "@/interfaces/pages/about-us";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function AboutUsBranches(props: {
  res: AboutUsRequestInterface;
}) {
  return (
    <section className="mt-10">
      <h1 className="text-4xl font-semibold text-primary-main mb-6 text-center">
        شعبه‌ها
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
        {props.res.branches.map((branch) => (
          <div key={branch.id} className="bg-white p-3 rounded-lg shadow-md">
            {branch.image?.url && (
              <div className="w-full mb-4">
                <NextImage
                  alt={`درباره ما`}
                  className="rounded"
                  {...branch.image}
                />
              </div>
            )}
            <h3 className="text-xl font-bold text-primary-main mb-2">
              {branch.title}
            </h3>
            <p className="text-gray-600 mb-2">{branch.description}</p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaLocationDot /> {branch.address}
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaPhone /> {branch.phone_number1} | {branch.phone_number2}
            </p>
            <div className="mt-4 flex gap-4 text-primary-main justify-end">
              <SocialLinks />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
