"use client";

import { submitProductComment } from "@/actions/add-comment";
import { CommentSchemaValues } from "@/schemas/add-comment";
import Toast from "@/utils/toast";
import { useActionState, useEffect, useState, useTransition } from "react";
import { FaSpinner } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type FormState = {
  success: boolean;
  errors: Partial<Record<keyof CommentSchemaValues, string[]>>;
  values: Partial<CommentSchemaValues>;
};

const initialState: FormState = {
  success: false,
  errors: {},
  values: {
    message: "",
    productId: 0,
  },
};

interface Props {
  productId: number;
  onClose: () => void;
}

export default function AddCommentModal({ productId, onClose }: Props) {
  const [state, formAction] = useActionState(
    async (_: FormState, formData: FormData): Promise<FormState> =>
      await submitProductComment(formData),
    initialState
  );

  const [formValues, setFormValues] = useState<Partial<CommentSchemaValues>>({
    productId,
  });
  const [isPending, startTransition] = useTransition();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setFormValues(state.success ? { productId } : state.values);
    if (state.success) {
      setShowToast(true);
      setTimeout(() => onClose(), 1500);
    }
  }, [state, productId, onClose]);

  return (
    <>
      <Toast
        message="دیدگاه با موفقیت ثبت شد."
        isVisible={state.success && showToast}
        onClose={() => setShowToast(false)}
      />

      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
        <div className="bg-white rounded-lg max-w-md w-full relative p-6 shadow-md">
          <button
            onClick={onClose}
            className="absolute top-3 left-3 text-gray-500 hover:text-black text-xl"
            aria-label="بستن"
          >
            ✖
          </button>
          <h3 className="text-lg font-bold mb-4 text-primary-main">
            ثبت دیدگاه شما
          </h3>

          <form
            action={(formData) => {
              formData.set("productId", productId.toString());
              startTransition(() => formAction(formData));
            }}
            className="space-y-4"
          >
            <textarea
              name="message"
              placeholder="دیدگاه شما"
              rows={6}
              className="form-input"
              value={formValues.message || ""}
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
            />
            {state.errors.message && (
              <p className="text-sm text-red-500">{state.errors.message[0]}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-primary-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 hover:bg-primary-main disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  در حال ثبت
                  <FaSpinner className="animate-spin w-5 h-5" />
                </>
              ) : (
                "ثبت دیدگاه"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
