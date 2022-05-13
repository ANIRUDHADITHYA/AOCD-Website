import {useState} from 'react';
import {useNavigate} from "react-router-dom"
import Axios from "axios";
import {useAuth} from './Auth';
import "./LoginPage.css";

const LoginPage =() =>{

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth()
    const Login = () =>{
     
        Axios.post("http://localhost:5000/login", {
            username: username,
            password: password,
        }).then((response)=>{
            if(response.data.message){
                alert(response.data.message);
                
            }
            else{
                alert("Welcome, "+response.data[0].name);
                auth.login(response.data[0].name)
                navigate("/AOCD-Admin/Portal", {replace: true})
                localStorage.setItem("isLogin", "true");
            }
        });
        
    }

    return(
        <div>
            <div className="Login">
                <h1>Login</h1>
                <div>
                <input type="text" placeholder="username" onChange={(e)=>{
                    setUsername(e.target.value);
                }}></input>
                <input type="password" placeholder="password" onChange={(e)=>{
                    setPassword(e.target.value);
                }}></input>
                <button onClick={Login}>Login</button>
                </div>
            </div>
        </div>
        
    );
}



export default LoginPage;
