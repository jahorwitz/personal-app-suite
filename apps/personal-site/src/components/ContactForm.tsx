import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContent } from "../i18n";
import { Button } from "./Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Replace with your actual Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/PLACEHOLDER";

/**
 * Accessible contact form with validation, submission states, and i18n support.
 *
 * Uses `react-hook-form` + `zod` for validation. All text comes from
 * `useContent().contact.form`. Submits to a Formspree endpoint via POST.
 */
export function ContactForm() {
  const { contact } = useContent();
  const { form: t } = contact;
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-950">
        <svg
          className="mx-auto mb-4 h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-lg font-medium text-green-800 dark:text-green-200">
          {t.successMessage}
        </p>
      </div>
    );
  }

  const inputBaseClasses = [
    "w-full rounded-lg border px-4 py-2.5 text-base transition-colors",
    "bg-white dark:bg-gray-900",
    "text-gray-900 dark:text-gray-100",
    "placeholder:text-gray-400 dark:placeholder:text-gray-500",
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
    "dark:focus:ring-indigo-400 dark:focus:border-indigo-400",
  ].join(" ");

  const inputNormalBorder = "border-gray-300 dark:border-gray-600";
  const inputErrorBorder = "border-red-400 dark:border-red-500";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t.nameLabel}
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder={t.namePlaceholder}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          aria-invalid={!!errors.name}
          className={`${inputBaseClasses} ${errors.name ? inputErrorBorder : inputNormalBorder}`}
          {...register("name")}
        />
        {errors.name && (
          <p
            id="contact-name-error"
            className="mt-1 text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {t.nameLabel}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t.emailLabel}
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder={t.emailPlaceholder}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          aria-invalid={!!errors.email}
          className={`${inputBaseClasses} ${errors.email ? inputErrorBorder : inputNormalBorder}`}
          {...register("email")}
        />
        {errors.email && (
          <p
            id="contact-email-error"
            className="mt-1 text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {t.emailLabel}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t.subjectLabel}
        </label>
        <select
          id="contact-subject"
          aria-describedby={
            errors.subject ? "contact-subject-error" : undefined
          }
          aria-invalid={!!errors.subject}
          className={`${inputBaseClasses} ${errors.subject ? inputErrorBorder : inputNormalBorder}`}
          {...register("subject")}
        >
          <option value="">{t.subjectPlaceholder}</option>
          {t.subjectOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p
            id="contact-subject-error"
            className="mt-1 text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {t.subjectLabel}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t.messageLabel}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder={t.messagePlaceholder}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          aria-invalid={!!errors.message}
          className={`${inputBaseClasses} resize-y ${errors.message ? inputErrorBorder : inputNormalBorder}`}
          {...register("message")}
        />
        {errors.message && (
          <p
            id="contact-message-error"
            className="mt-1 text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {t.messageLabel}
          </p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300"
          role="alert"
        >
          {t.errorMessage}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            {t.submitLabel}
          </span>
        ) : (
          t.submitLabel
        )}
      </Button>
    </form>
  );
}
