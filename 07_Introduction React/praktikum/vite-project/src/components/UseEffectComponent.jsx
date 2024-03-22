import React, {useEffect, useState} from "react";

export default function UseEffectComponent() {
    const [count, setCount] = useState();
    const [inputValue, setInputValue] = useState("");
    const [display, setDisplay] = useState("none");
    const [inputEnabled, setInputEnabled] = useState(true);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = () => {
        setCount(count + 1);
    }
    
    useEffect (() => {
        if (inputValue.length == 5) {
            setDisplay("");
            setInputEnabled(false);
        } else {
            setDisplay("none");
            setInputEnabled(true);
        }
    }, [inputValue]);


    useEffect (() => {
        console.log("Tanpa Kurung Siku")
    })
    
    

    return (
        <div>
            <h1>Halaman useEffectComponent</h1>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <small style={{ display: display }}>Input Terlalu Panjang</small>
            {inputValue}
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

