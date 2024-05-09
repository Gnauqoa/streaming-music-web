import { ReactNode } from "react";

export default function Headerbar({ children }: { children: ReactNode }) {
  return (
    <div className="header-bar" style={{ background: undefined }}>
      {children}
    </div>
  );
}
