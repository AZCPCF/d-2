import NextLink from "@/components/ui/link";
import { panelUrl } from "@/utils/env";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

/**
 * Header buttons component displaying cart and user account links.
 * Cart and user panel links open in a new tab.
 */
export default function HeaderButtons() {
  return (
    <div className="flex gap-3 max-[500px]:gap-2 items-center">
      {/* Cart Button */}
      <NextLink
        target="_blank"
        href={`${panelUrl}/cart`}
        label={<FiShoppingCart fontSize={24} />}
        className="p-2.25 max-[500px]:p-1.5 bg-secondary-main text-white flex justify-center hover:text-white rounded-lg text-lg duration-100 cursor-pointer"
      />
      
      {/* Login/User Account Button */}
      <NextLink
        target="_blank"
        href={panelUrl}
        label={
          <div className="flex items-center gap-2">
            {/* Hide text on smaller screens */}
            <span className="max-lg:hidden">حساب کاربری</span>
            <FaUser fontSize={24} />
          </div>
        }
        className="p-2.25 max-[500px]:p-1.5 rounded-md text-lg bg-primary-400 hover:text-white duration-100 cursor-pointer text-white"
      />
    </div>
  );
}
