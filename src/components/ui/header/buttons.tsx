import { FaRegMoon, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import NextLink from "../../link";
import NextButton from "@/components/button";

export default function HeaderButtons() {
  return (
    <div className="flex gap-3 max-[500px]:gap-2 items-center">
      {/* theme button */}
      <NextButton
        role="button"
        className="font-kalameh p-2 max-[500px]:p-1 rounded-lg text-xl duration-100 cursor-pointer hover:text-primary-main"
        title={<FaRegMoon fontSize={24} />}
      />
      {/* cart button */}
      <NextLink
        target="_blank"
        label={<FiShoppingCart fontSize={26} />}
        href="https://account.a.test"
        className="font-kalameh max-[500px]:p-1 p-2 rounded-lg text-xl duration-100 cursor-pointer"
      />
      {/* login button */}
      <NextLink
        target="_blank"
        label={<FaUser fontSize={24} />}
        href="https://account.a.test"
        className="font-kalameh  p-3 max-[500px]:p-2 rounded-md text-lg bg-primary-main duration-100 cursor-pointer text-white hover:text-white"
      />
    </div>
  );
}
