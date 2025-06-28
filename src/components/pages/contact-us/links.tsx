import SocialLinks from "@/components/ui/social-links";
import { AboutUsRequestInterface } from "@/interfaces/pages/about-us";
import Link from "next/link";

export default function ContactUsLinks(props: {
  res: AboutUsRequestInterface;
}) {
  return (
    <section className="flex gap-4 bg-transparent col-span-4 max-lg:col-span-5 max-md:order-first max-md:col-span-full">
      <div className="bg-white shadow-md w-full rounded-xl max-md:rounded-lg  p-6 max-md:p-3 space-y-5 ">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
          تماس با ما
        </h2>
        <div className="space-y-3 text-gray-700 leading-relaxed text-xl max-md:text-lg">
          <p>{props.res.data.address}</p>
          <p>
            <Link
              href={`mailto:${props.res.data.email}`}
              className="text-primary-main hover:underline"
            >
              {props.res.data.email}
            </Link>
          </p>
          <p className="text-primary-main gap-1 flex">
            <Link
              href={`tel:${props.res.data.phone_number}`}
              className="text-primary-main hover:underline"
            >
              {props.res.data.phone_number}
            </Link>
            <span>-</span>
            <Link
              href={`tel:${props.res.data.phone_number2}`}
              className="text-primary-main hover:underline"
            >
              {props.res.data.phone_number2}
            </Link>
          </p>
        </div>

        <div className="flex gap-4 text-primary-main justify-end pt-2">
          <SocialLinks />
        </div>
        <iframe
          className="w-full h-72 rounded-xl shadow-md max-md:rounded-sm"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12834.724192297677!2d52.8605148!3d36.4652636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f855de7aa315083%3A0xdbf192325a5afcfa!2z2YHYsdmI2LTar9in2YcgRDI!5e0!3m2!1sen!2s!4v1726302241438!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
