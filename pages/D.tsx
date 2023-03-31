
import { WithColorContext } from "@/context/MoneyContext";
import { PizzaContext, WithPizzaContext } from "@/context/PizzaContext";
import { WithUserContext } from "@/context/UserContext";
import React, { useContext } from "react";

const D = () => {
  const { favoriteTopping } = useContext(PizzaContext);
  return (
    <>
      <div>PAGE D</div>
      <p>Favorite topping stored in context: {favoriteTopping}</p>
    </>
  );
};

D.getLayout = (page: React.ReactNode) => {
  return (
      <WithUserContext>
        <WithPizzaContext>
          <WithColorContext>{page}</WithColorContext>
        </WithPizzaContext>
      </WithUserContext>
  );
};

export default D;
