import { useMountAlerts } from "@/hooks/useMountAlerts";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

interface UserContextValue {
    name: string | null;
    setName: Dispatch<SetStateAction<string | null>>
}

export const UserContext = createContext<UserContextValue>({} as UserContextValue);

export const WithUserContext = ({ children }: { children: React.ReactNode}) => {
    const [name, setName] = useState<string | null>(null);
    useMountAlerts("WithUserContext");

    return <UserContext.Provider value={{name, setName}}>
        {children}
    </UserContext.Provider>
}
