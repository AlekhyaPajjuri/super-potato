'use client'
import{MouseEvent, useEffect, useState} from 'react';
import Message from './Message';
type CounterProps ={
    initialValue: number;
}

export default function Counter(props: CounterProps) {

    const [count, setCounter] = useState(props.initialValue);

    useEffect( () =>{
        console.log("useEffect counter updated", count);   
    },[])

    function inc(evt: MouseEvent<HTMLButtonElement>) {

        //console.log("Increment", evt);
        // props.initialValue += 1;
        //setCounter(count + 1);
        //setCounter(count + 1);
        setCounter(pvalue => pvalue + 1);
        //console.log("count", props.initialValue);
        console.log("count", count);

    }
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {

        const value = evt.target.value;

        console.log("Change Event", evt.target.value);
        setCounter(parseInt(value));
    }

    return (
        <div style ={{border:`2px solid blue`, margin: "4px", padding: "4px"}}>
            <h4>Counter</h4>
            <p> Count : {count} </p>

            <div>
                <button onClick={inc}>Increment</button>&nbsp;
                <button onClick={() => setCounter(count - 1 )}>Decrement</button>
            </div>

            <div>
                
                <input type="number" placeholder="Counter" value={count} onChange={handleChange}></input>
            </div>

        { count > 10 ? <Message text={"Count: " + count} color="green"/> : null}
        </div>
    )
}
