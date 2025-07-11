import SocialLinks from "../social-links";

export default function SocialLinksHeader() {
  return (
    <div className="w-full flex flex-wrap pb-5">
      {/* Header text */}
      <p className="w-full text-end">ما را در شبکه های اجتماعی دنبال کنید</p>

      {/* Social links aligned to the right */}
      <div className="w-full flex justify-end items-center pt-3 gap-3">
        <SocialLinks className="hover:text-primary-800" />
      </div>
    </div>
  );
}
