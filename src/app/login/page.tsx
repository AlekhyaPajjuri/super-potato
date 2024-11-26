'use client'
import { useState, MouseEvent, useRef } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {

    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const useNameRef = useRef<HTMLInputElement>(null);

    async function login(evt: MouseEvent<HTMLButtonElement>) {

        evt.preventDefault();
        console.log("username from the ref:", useNameRef.current?.value);

        if (username && password) {
            //setErrorMessage("");
            //API Call
            const url = "http://localhost:9000/login";
            // axios.post(url, { name: username,password}).then(response => {
            //     console.log(response);
            //     }, (errorResponse) => {
            //         console.log("error Response", errorResponse);
            //     })


            try {
                const response = await axios.post(url, { name: username, password });
                console.log("response", response);
                setErrorMessage("");
                 router.push("/");
                

            } catch(errorResponse) {
                console.log("error", errorResponse);
                setErrorMessage("Invalid credentials");
            }
           
        } else {
           // alert("Enter the credentials");
           setErrorMessage("Enter the credentials");
        }


    }
    return (
        <div>
            <h4> Login </h4>
            {errorMessage ? <div className="alert alert-warning">Enter the credentials </div> : null}
            <form>

                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input type="text" ref={useNameRef} className="form-control" id="username" value={username} onChange={e => setUserName(e.target.value)}/>
                </div>


                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={e => setPassWord(e.target.value)}/>
                </div>
                <br/>
                <div>
                <button  className="btn btn-primary" onClick={login}>SignIn</button>
                </div>

            </form>



        </div>
    )
}