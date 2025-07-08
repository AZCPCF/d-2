"use client";

import { submitProductComment } from "@/actions/add-comment";
import { CommentSchemaValues } from "@/schemas/add-comment";
import { useActionState, useEffect, useState, useTransition } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";

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
    product_id: 0,
  },
};

interface AddCommentModalProps {
  product_id: number;
  onClose: () => void;
}

/**
 * Modal component for submitting product comments.
 * Handles form state, validation errors, and submission status.
 */
export default function AddCommentModal({
  product_id,
  onClose,
}: AddCommentModalProps) {
  // Manage form submission state and response using useActionState hook
  const [state, formAction] = useActionState(
    async (_: FormState, formData: FormData): Promise<FormState> =>
      await submitProductComment(formData),
    initialState
  );

  // Local form values state for controlled textarea
  const [formValues, setFormValues] = useState<Partial<CommentSchemaValues>>({
    product_id,
  });

  // Manage transition state to show loading spinner while submitting
  const [isPending, startTransition] = useTransition();

  // Effect: update form values on state changes and show success toast
  useEffect(() => {
    setFormValues(state.success ? { product_id } : state.values);
    if (state.success) {
      toast.success("دیدگاه با موفقیت ثبت شد.");
      onClose();
    }
  }, [state, product_id, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-comment-title"
    >
      <div className="bg-background rounded-lg max-w-md w-full relative p-6 shadow-md">
        <button
          onClick={onClose}
          className="absolute top-3 left-3 text-gray-500 hover:text-black text-xl"
          aria-label="بستن"
          type="button"
        >
          ✖
        </button>

        <h3
          id="add-comment-title"
          className="text-lg font-bold mb-4 text-primary-main"
        >
          ثبت دیدگاه شما
        </h3>

        <form
          action={(formData) => {
            formData.set("product_id", product_id.toString());
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
            aria-invalid={!!state.errors.message}
            aria-describedby={
              state.errors.message ? "message-error" : undefined
            }
          />
          {state.errors.message && (
            <p id="message-error" className="text-sm text-red-500" role="alert">
              {state.errors.message[0]}
            </p>
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
  );
}
