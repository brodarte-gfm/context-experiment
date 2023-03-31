import { useMountAlerts } from "@/hooks/useMountAlerts";
import React from "react";

interface FooProps {
  children: React.ReactNode;
}

const Foo = ({ children }: FooProps) => {
  useMountAlerts("Foo");
  return (
    <div>
      FOO
      {children}
    </div>
  );
};

export default Foo;
