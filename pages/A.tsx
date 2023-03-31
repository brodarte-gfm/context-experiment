import { UserContext, WithUserContext } from "@/context/UserContext";
import React, { FormEvent, useContext, useState } from "react";


const A =  () => {
    const { name, setName } = useContext(UserContext);
    const [nameInput, setNameInput] = useState("");
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        setName(nameInput);
        setNameInput("");
    }
    return (<>
        <div>PAGE A</div>
        <p>Name stored in context: {name}</p>
        <br />
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input name="name" type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
            <button style={{marginLeft: "0.5rem"}} type="submit">Submit</button>
        </form>
    </>)
};

A.getLayout = (page: React.ReactNode) => {
    return <WithUserContext>{page}</WithUserContext>
}

export default A;
