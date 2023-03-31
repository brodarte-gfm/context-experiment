import { useMountAlerts } from "@/hooks/useMountAlerts";
import React from "react";

interface BazProps {
  children: React.ReactNode;
}

const Baz = ({ children }: BazProps) => {
  useMountAlerts("Baz");
  return (
    <div>
      Baz
      {children}
    </div>
  );
};

export default Baz;
