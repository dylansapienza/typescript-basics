import React, {useState} from 'react';

interface Props{
    initval : number,
    name : string
}

export const Counter: React.FC<Props> = () => {

    const [counter, setCounter] = useState(0);

    function incrementVal(){
        setCounter(counter + 1);
    }

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick = {() => incrementVal()}>Increment</button>
        </div>
    );
}

export default Counter;