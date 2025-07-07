"use client";

import AddCommentModal from "@/components/ui/modal/add-comment-modal";
import { CommentInterface } from "@/interfaces";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  comments: CommentInterface[];
  productId: number;
}

export default function ProductComments({ comments, productId }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-10 space-y-6">
      <div className="text-lg font-semibold text-gray-700 border-b pb-2 flex justify-between items-center">
        <h3>دیدگاه کاربران</h3>
        <button
          className="px-4 py-2 bg-primary-main text-white rounded hover:bg-primary-dark transition text-sm"
          onClick={() => setShowModal(true)}
        >
          {"افزودن دیدگاه"}
        </button>
      </div>

      {comments.length === 0 ? (
        <p className="text-sm text-gray-500">
          هنوز دیدگاهی برای این محصول ثبت نشده است.
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border border-gray-100 bg-white rounded p-4 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaUserCircle className="text-xl text-gray-500" />
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {comment.customer?.full_name || comment.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {comment.name}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  {comment.created_at.str}
                </span>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                {comment.message}
              </p>
              {comment.admin_answer && (
                <div className="border-r-4 border-primary-main bg-gray-50 p-3 pr-4 rounded text-sm text-gray-700">
                  <span className="block font-semibold mb-1 text-primary-main">
                    پاسخ ادمین :
                  </span>
                  {comment.admin_answer}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <AddCommentModal
          product_id={productId}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
