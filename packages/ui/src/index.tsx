import type { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <button style={{ background: "#1d4ed8", color: "white", border: "none", borderRadius: 6, padding: "0.65rem 1rem" }}>
      {children}
    </button>
  );
}

