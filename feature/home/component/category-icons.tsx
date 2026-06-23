import type { SVGProps } from "react";

export function NapkinIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M6 4h12l-1 16H7L6 4z" />
      <path d="M8 8h8" />
      <path d="M9 12h6" />
      <path d="M10 16h4" />
    </svg>
  );
}
