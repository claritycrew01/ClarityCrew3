import type { ReactNode } from "react";

export function StatusMessage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div role="status" aria-live="polite" aria-atomic="true" className={className}>
      {children}
    </div>
  );
}
