import Bar from "@/components/Bar";
import Baz from "@/components/Baz";
import Foo from "@/components/Foo";
import { useEffect, useState } from "react";

const WrapperA = ({ children }: { children: React.ReactNode }) => {
  return (
    <Foo>
      <Bar>
        <Baz>{children}</Baz>
      </Bar>
    </Foo>
  );
};

const WrapperB = ({ children }: { children: React.ReactNode }) => {
  return (
    <Foo>
      <Bar>
        <Baz>{children}</Baz>
      </Bar>
    </Foo>
  );
};

const Home = () => {
  const [change, setChange] = useState(false);
  if (change) {
    return (
      <>
        {WrapperA({children: "HELLO!"})}
        <button onClick={() => setChange((p) => !p)}>Change!</button>
      </>
    );
  } else {
    return (
      <>
        {WrapperB({children: "WOOHOO!"})}
        <button onClick={() => setChange((p) => !p)}>Change!</button>
      </>
    );
  }
};

export default Home;
