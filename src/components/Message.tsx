'use client'

import { useEffect } from "react";

type MessageProps = {
    text: string;
    color: string;
}


function Message(props: MessageProps) {

    console.log("Message props", props);

    const sampleJSX = (<span> This is a JSX expression </span>);

    useEffect( () =>{
        console.log("Message component is mounted");

        return () => {
            console.log("Message component is unmounted");
        }
    
    },[])

    return (
        <div style ={{border:`2px solid ${props.color}`, margin: "4px", padding: "6px"}}>
            <h4> Message : {props.text} </h4>
            <p>This is a functional component</p>
            <p> Expression: {5+7}</p>
            <p> Expression: {sampleJSX}</p>
            {/* <p> Expression: Generated at {new Date().toLocaleString()}</p> */}
        </div>
    )
}

export default Message;