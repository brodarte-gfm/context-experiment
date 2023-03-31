import { useMountAlerts } from "@/hooks/useMountAlerts";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

interface ColorContextValue {
    favoriteColor: string | null;
    setFavoriteColor: Dispatch<SetStateAction<string | null>>
}

export const ColorContext = createContext<ColorContextValue>({} as ColorContextValue);

export const WithColorContext = ({ children }: { children: React.ReactNode}) => {
    const [favoriteColor, setFavoriteColor] = useState<string | null>(null);
    useMountAlerts("WithColorContext");

    return <ColorContext.Provider value={{favoriteColor, setFavoriteColor}}>
        {children}
    </ColorContext.Provider>
}
