import React, {useState} from "react";


const Finish = () => {
    const [name, setName] = useState('clear')
    const [status, setStatus] = useState("Неопределился")
    function changeName(e) {
        setName(e.target.value);
    }
    function test(e) {
        setStatus(e.target.value)
    }
    return(
        <div>
            <h1>Hello, i'm {name} и я {status}</h1>
            <input value={name}
                   onChange={changeName}
            />
            <select onChange={test}>
                <option>Не определился</option>
                <option>В отношениях</option>
                <option>Не в отношениях</option>
            </select>
        </div>
    )
}

export default Finish;