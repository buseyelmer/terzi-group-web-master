import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

const fieldClassName =
  "block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none";

type AuthFieldProps = {
  label: string;
  error?: string;
  hint?: string;
  children?: ReactNode;
};

export function AuthField({ label, error, hint, children }: AuthFieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-gray-800">{label}</label>
      {children}
      {hint && !error ? <p className="mt-1.5 text-xs text-gray-500">{hint}</p> : null}
      {error ? <p className="mt-1.5 text-xs text-brand">{error}</p> : null}
    </div>
  );
}

type AuthInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
};

export function AuthInput({ label, error, hint, className, ...props }: AuthInputProps) {
  return (
    <AuthField label={label} error={error} hint={hint}>
      <input className={`${fieldClassName} ${className ?? ""}`} {...props} />
    </AuthField>
  );
}

type AuthTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  hint?: string;
};

export function AuthTextarea({ label, error, hint, className, ...props }: AuthTextareaProps) {
  return (
    <AuthField label={label} error={error} hint={hint}>
      <textarea className={`${fieldClassName} ${className ?? ""}`} {...props} />
    </AuthField>
  );
}

export function AuthCheckbox({
  label,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand/30"
          {...props}
        />
        <span className="text-sm leading-relaxed text-gray-700">{label}</span>
      </label>
      {error ? <p className="mt-1.5 text-xs text-brand">{error}</p> : null}
    </div>
  );
}

export function AuthButton({
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50";
  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/20"
      : "border border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50";

  return (
    <button type={type} className={`${base} ${styles} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
}
