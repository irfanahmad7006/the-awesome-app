'use client'
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, UseDispatch } from "react-redux";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const route = useRouter();
    const dispatch = useDispatch();

    function handleUsernameChange(evt: ChangeEvent<HTMLInputElement>) {

        const value = evt.target.value;
        setUsername(value);
    }
    async function login() {
        if (!username && !password) {
            //alert("Enter the credentials")
            setMessage("Enter The Credentials")
        }
        else {
            const url = "http://localhost:9000/login"
            // axios
            // .post(url,{name:username, password})
            // .then((response)=>{
            //     console.log("Fullfilled", response)
            // })// then is for when a promise is fulfilled
            // .catch((error)=>{
            //     console.log("Rejected", error)
            // })//catch is for when a promise is Rejected
            // .finally(()=>{
            //     console.log("in Finally")
            // })//finally will always execute wether the promise is fullfiled or rejected
            // setMessage("")
            try {
                const response = await axios.post(url, { name: username, password })
                console.log("Fullfiled", response)
                setMessage("")
                //dispatch the action for redux
                dispatch({
                    type: "auth_login", payload: {
                        isAuthenticated: true,
                        userName: username,
                        accessToken: response.data.accessToken,
                        refreshToken: response.data.refreshToken
                    }
                })


                route.push('/products')
            } catch (error) {
                console.log("Rejected", error)
                setMessage("Invalid credential")
                dispatch({type:"auth_logout"})
            } finally {
                console.log("in Finally")
            }

        }

    }
    return (
        <div>
            <h4>Login</h4>
            <p>Login to your Next.js application.</p>

            {message ? <div className="alert alert-warning">{message}</div> : null}

            <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input className="form-control" type="text" id="userName" value={username} onChange={handleUsernameChange} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password" value={password}
                    onChange={evt => setPassword(evt.target.value)} />
            </div>

            <br />
            <button className="btn btn-success" onClick={login}>Login</button>

        </div>
    )
}