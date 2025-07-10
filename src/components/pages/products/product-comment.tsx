"use client";

import AddCommentModal from "@/components/modal/add-comment-modal";
import LogoutModal from "@/components/modal/logout-modal";
import { useClientCtx } from "@/contexts/client-context";
import { CommentInterface } from "@/interfaces";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  comments: CommentInterface[];
  productId: number;
}

export default function ProductComments({ comments, productId }: Props) {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn } = useClientCtx();
  return (
    <div className="mt-10 space-y-6">
      <div className="text-lg font-semibold dark:text-white text-gray-700 border-b pb-2 flex justify-between items-center">
        <h3>دیدگاه کاربران</h3>
        <button
          className="px-4 py-2 bg-primary-main text-white rounded hover:bg-primary-dark transition text-sm"
          onClick={() => setShowModal(true)}
        >
          {"افزودن دیدگاه"}
        </button>
      </div>

      {comments.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-300">
          هنوز دیدگاهی برای این محصول ثبت نشده است.
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border border-gray-100 bg-background rounded p-4 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-white">
                <div className="flex items-center gap-2">
                  <FaUserCircle className="text-xl text-gray-500 dark:text-white" />
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {comment.customer?.full_name || comment.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {comment.name}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-200">
                  {comment.created_at.str}
                </span>
              </div>
              <p className="text-sm dark:text-white text-gray-800 leading-relaxed">
                {comment.message}
              </p>
              {comment.admin_answer && (
                <div className="border-r-4 border-primary-main dark:border-primary-600 bg-gray-50 dark:bg-slate-400 p-3 pr-4 rounded text-sm text-gray-700">
                  <span className="block font-semibold mb-1 text-primary-main dark:text-primary-600">
                    پاسخ ادمین :
                  </span>
                  <span className="dark:text-white">
                    {comment.admin_answer}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {showModal &&
        (isLoggedIn ? (
          <AddCommentModal
            product_id={productId}
            onClose={() => setShowModal(false)}
          />
        ) : (
          <LogoutModal
            onClose={() => setShowModal(false)}
            title={"ثبت دیدگاه"}
          />
        ))}
    </div>
  );
}
