import { ColorContext, WithColorContext } from "@/context/MoneyContext";
import { PizzaContext, WithPizzaContext } from "@/context/PizzaContext";
import { UserContext, WithUserContext } from "@/context/UserContext";
import React, { FormEvent, useContext, useState } from "react";

const C = () => {
  const { favoriteColor, setFavoriteColor } = useContext(ColorContext);
  const { name } = useContext(UserContext);
  const { favoriteTopping, setFavoriteTopping } = useContext(PizzaContext);
  const [toppingInput, setToppingInput] = useState("");
  const [colorInput, setColorInput] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setFavoriteTopping(toppingInput);
    setFavoriteColor(colorInput);
    setToppingInput("");
    setColorInput("");
  };
  return (
    <>
      <div>PAGE C</div>
      <p>Name stored in context: {name}</p>
      <p>Favorite topping stored in context: {favoriteTopping}</p>
      <p>Favorite color stored in context: {favoriteColor}</p>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your favorite pizza topping: </label>
        <input
          name="name"
          type="text"
          value={toppingInput}
          onChange={(e) => setToppingInput(e.target.value)}
        />
        <br />
        <label htmlFor="name">Enter your favorite color: </label>
        <input
          name="name"
          type="text"
          value={colorInput}
          onChange={(e) => setColorInput(e.target.value)}
        />
        <button style={{ marginLeft: "0.5rem" }} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

C.getLayout = (page: React.ReactNode) => {
  return (
    <WithUserContext>
      <WithPizzaContext>
        <WithColorContext>{page}</WithColorContext>
      </WithPizzaContext>
    </WithUserContext>
  );
};

export default C;
