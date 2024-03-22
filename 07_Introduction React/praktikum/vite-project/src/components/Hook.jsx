import React, {useState} from "react";

export default function Hook () {
    const [username, setUsername] = useState();
    const [counter, setCounter] = useState(0);
    const [bahasa, setBahasa] = useState("button");
    const [arrayValue, setArrayValue] = useState (["array1", "array3", "array3"]);
    const handleChangeUsername = (e) => {
        setUsername (e.target.value);
        console.log (username)
        return console.log (username)
    };

    const handleClickSubmit = () => {
        setArrayValue ([...arrayValue, username]);
        return console.log ("tes");
    };
    
    const handleClickCounter = () => {
        setCounter (counter + 2);
    };

    return (
        <div>
            <h1>Hook</h1>

            <form action="#">
                {username}
                <input type="text" placeholder="username" onChange={handleChangeUsername} />
                <button onClick={handleClickSubmit}>Button</button>
                <br />
                {arrayValue}

            </form>
            
            <button onClick={() => {
                if (bahasa == "tombol") {
                    setBahasa ("button");
                } else {
                    setBahasa("tombol")
                }
            }} 
            >{bahasa}</button>
            <br />
            <button onClick={handleClickCounter}>count</button>
            {counter}
        </div>
    )
}