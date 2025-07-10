"use client";
import { usePathname } from "next/navigation";
import NextModal from ".";
import NextLink from "../link";
import { panelUrl } from "@/utils/env";

export default function LogoutModal({
  onClose,
  title,
}: {
  onClose: () => void;
  title: string;
}) {
  const pathname = usePathname();
  return (
    <NextModal
      jsx={
        <div className="flex justify-center flex-wrap gap-4 py-8">
          <p className="text-xl text-primary-main max-md:text-lg">
            برای {title} ابتدا باید وارد حساب کاربری خود شوید.
          </p>
          <NextLink
            href={`${panelUrl}/login?back=${pathname}`}
            label={"ورود به حساب کاربری"}
            className="bg-primary-main hover:bg-primary-600 hover:text-white text-white px-5 py-2 rounded transition"
          />
        </div>
      }
      onClose={onClose}
    />
  );
}
