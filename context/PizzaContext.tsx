import { useMountAlerts } from "@/hooks/useMountAlerts";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface PizzaContextValue {
  favoriteTopping: string | null;
  setFavoriteTopping: Dispatch<SetStateAction<string | null>>;
}

export const PizzaContext = createContext<PizzaContextValue>(
  {} as PizzaContextValue
);

export const WithPizzaContext = ({ children }: { children: React.ReactNode}) => {
    const [favoriteTopping, setFavoriteTopping] = useState<string | null>(null);
    useMountAlerts("WithPizzaContext");

    return <PizzaContext.Provider value={{favoriteTopping, setFavoriteTopping}}>
        {children}
    </PizzaContext.Provider>
}

