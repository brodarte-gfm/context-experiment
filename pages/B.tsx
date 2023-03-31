import { UserContext, WithUserContext } from "@/context/UserContext";
import React, { useContext } from "react";


const B =  () => {
    const { name } = useContext(UserContext);
    return (<>
        <div>PAGE B</div>
        <p>Name stored in context: {name}</p>
    </>)
};

B.getLayout = (page: React.ReactNode) => {
    return <WithUserContext>{page}</WithUserContext>
}

export default B;
