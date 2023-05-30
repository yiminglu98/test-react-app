import { useState } from "react";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);
    
    const changeTextHandler = () =>{
        setChangedText( prevState => {
          return prevState = !prevState;
        })
    };

    return (
        <>
        <h2>Hello There</h2>
        {!changedText && <p>It's nice to see you</p>}
        {changedText && <p>Changed!</p>}
        <button onClick={changeTextHandler}>Change Text!</button>
        </>
    )
};

export default Greeting;