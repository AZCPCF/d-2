import NextLink from "@/components/ui/link";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function HeaderButtons() {
  return (
    <div className="flex gap-3 max-[500px]:gap-2 items-center">
      {/* Cart Button */}
      <NextLink
        target="_blank"
        label={<FiShoppingCart fontSize={24} />}
        href="https://account.a.test"
        className="p-2.25 max-[500px]:p-1.5 bg-black text-white flex justify-center hover:text-white rounded-lg text-lg duration-100 cursor-pointer"
      />
      {/* Login Button */}
      <NextLink
        target="_blank"
        label={
          <div className="flex items-center gap-2">
            <span className="max-lg:hidden">حساب کاربری</span>
            <FaUser fontSize={24} />
          </div>
        }
        href="https://account.a.test"
        className="p-2.25 max-[500px]:p-1.5 rounded-md text-lg bg-primary-400 hover:text-white duration-100 cursor-pointer text-white"
      />
    </div>
  );
}
