import { useMountAlerts } from "@/hooks/useMountAlerts";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

interface CandyContextValue {
    candy: string | null;
    setCandy: Dispatch<SetStateAction<string | null>>
}

export const CandyContext = createContext<CandyContextValue>({} as CandyContextValue);

export const WithCandyContext = ({ children }: { children: React.ReactNode}) => {
    const [candy, setCandy] = useState<string | null>(null);
    useMountAlerts("WithCandyContext");

    return <CandyContext.Provider value={{candy, setCandy}}>
        {children}
    </CandyContext.Provider>
}
