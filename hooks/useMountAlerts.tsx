import { useEffect } from "react";

export const useMountAlerts = (name: string) => {
    useEffect(() => {
        console.log(`%c${name} is mounting`, "color: green");
        return () => {
            console.log(`%c${name} is unmounting`, "color: red");
        }
    }, [])
}
