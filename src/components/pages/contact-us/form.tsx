"use client";

import { useEffect, useState, useTransition } from "react";
import { useActionState } from "react";
import { submitContactForm } from "@/actions/contact-us";
import { ContactFormValues } from "@/schemas/contact-us";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";

type ContactFormState = {
  success: boolean;
  errors: Partial<Record<keyof ContactFormValues, string[]>>;
  values: Partial<ContactFormValues>;
};

const initialState: ContactFormState = {
  success: false,
  errors: {},
  values: {
    email: "",
    full_name: "",
    message: "",
    phone_number: "",
    subject: "",
  },
};

const fields: {
  name: keyof ContactFormValues;
  placeholder: string;
  isTextarea?: boolean;
}[] = [
  { name: "subject", placeholder: "موضوع" },
  { name: "full_name", placeholder: "نام و نام خانوادگی" },
  { name: "phone_number", placeholder: "شماره تلفن" },
  { name: "email", placeholder: "ایمیل" },
  {
    name: "message",
    placeholder: "پیام خود را اینجا بنویسید....",
    isTextarea: true,
  },
];

export default function ContactForm() {
  const [state, formAction] = useActionState(
    async (
      _: ContactFormState,
      formData: FormData
    ): Promise<ContactFormState> => await submitContactForm(formData),
    initialState
  );

  const [formValues, setFormValues] = useState<Partial<ContactFormValues>>({});
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    setFormValues(state.success ? {} : state.values);
    if (state.success) {
      toast.success("پیام با موفقیت ارسال شد.");
    }
  }, [state]);
  return (
    <section className="bg-white p-6 rounded-xl shadow-md space-y-6 max-lg:col-span-7 max-md:p-2 max-md:rounded-lg col-span-8 max-md:col-span-full flex flex-col">
      <h2 className="text-4xl text-primary-main font-bold mb-4 text-center max-md:text-2xl max-md:pt-3">
        تماس با D2
      </h2>
      <form
        action={(formData) => {
          startTransition(() => {
            formAction(formData);
          });
        }}
        className="space-y-4 grid grid-cols-2 max-md:grid-cols-1 gap-4"
      >
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.isTextarea ? "col-span-full" : ""}
          >
            {field.isTextarea ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                rows={10}
                className="form-input min-h-40 max-h-[300px]"
                value={formValues[field.name] || ""}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [field.name]: e.target.value,
                  }))
                }
              />
            ) : (
              <input
                name={field.name}
                placeholder={field.placeholder}
                className="form-input"
                value={formValues[field.name] || ""}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    [field.name]: e.target.value,
                  }))
                }
              />
            )}
            {state.errors[field.name] && (
              <p className="text-red-500 text-sm">
                {state.errors[field.name]?.[0]}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isPending}
          className="col-span-full w-full bg-primary-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 hover:bg-primary-main disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              در حال ارسال
              <FaSpinner className="animate-spin w-5 h-5" />
            </>
          ) : (
            "ارسال پیام"
          )}
        </button>
      </form>
    </section>
  );
}
