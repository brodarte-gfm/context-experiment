import { useMountAlerts } from "@/hooks/useMountAlerts";
import React from "react";

interface BarProps {
  children: React.ReactNode;
}

const Bar = ({ children }: BarProps) => {
  useMountAlerts("Bar");
  return (
    <div>
      Bar
      {children}
    </div>
  );
};

export default Bar;
