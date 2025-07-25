"use client";
import { panelUrl } from "@/utils/env";
import { FaSun, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import NextButton from "../../button";
import { toggleTheme } from "@/utils/toggle-theme";
import { BiMoon } from "react-icons/bi";
import NextLink from "@/components/link";

/**
 * Header buttons component displaying cart and user account links.
 * Cart and user panel links open in a new tab.
 */
export default function HeaderButtons() {
  return (
    <div className="flex gap-3 max-[500px]:gap-2 items-center">
      {/* Theme Toggle */}
      <NextButton
        onClick={() => {
          toggleTheme();
        }}
        title={
          <>
            <BiMoon className="dark:hidden" fontSize={24} />
            <FaSun className="dark:block hidden" fontSize={24} />
          </>
        }
        className="p-2.25 max-[500px]:p-1.5 flex text-primary-main justify-center rounded-lg text-lg duration-100 cursor-pointer"
      />
      {/* Cart Button */}
      <NextLink
        target="_blank"
        rel="noopener"
        href={`${panelUrl}`}
        label={<FiShoppingCart fontSize={24} />}
        className="p-2.5 max-[500px]:p-1.5 bg-secondary-main text-white flex justify-center hover:text-white rounded-lg text-lg duration-100 cursor-pointer"
      />

      {/* Login/User Account Button */}
      <NextLink
        target="_blank"
        rel="noopener"
        href={panelUrl}
        label={
          <div className="flex items-center gap-2">
            {/* Hide text on smaller screens */}
            <span className="max-lg:hidden">حساب کاربری</span>
            <FaUser fontSize={24} />
          </div>
        }
        className="p-2.25 max-[500px]:p-1.5 rounded-md text-lg bg-primary-main hover:text-white duration-100 cursor-pointer text-white"
      />
    </div>
  );
}
