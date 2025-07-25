"use client";
import { panelUrl } from "@/utils/env";
import NextModal from ".";
import NextLink from "../link";

export default function LogoutModal({
  onClose,
  title,
}: {
  onClose: () => void;
  title: string;
}) {
  return (
    <NextModal
      jsx={
        <div className="flex justify-center flex-wrap gap-4 py-8">
          <p className="text-lg text-primary-main max-md:text-lg max-sm:text-base">
            برای {title} ابتدا باید وارد حساب کاربری خود شوید.
          </p>
          <NextLink
            href={`${panelUrl}`}
            label={"ورود به حساب کاربری"}
            className="bg-primary-main hover:bg-primary-600 hover:text-white text-white px-5 py-2 rounded transition"
          />
        </div>
      }
      onClose={onClose}
    />
  );
}
