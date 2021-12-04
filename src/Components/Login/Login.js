import React from "react";
import {Link} from 'react-router-dom';
import styles from './Login.module.css';
import './Login.css'
import mainLogo from '../images/logo.png';


const Login = () => {

    const redirect = (e) => {
        e.preventDefault();

        let txtUsername = document.querySelector('#txtUsername');
        let txtPassword = document.querySelector('#txtPassword');

        const DATA = {
            username: txtUsername.value.trim(),
            password: txtPassword.value.trim()
        }

        const OPTIONS = {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(DATA),
        }

        const checkValidate = (data) => {
            if(data === "TRUE") {
                window.location.href = '/Home';
            }else {
                let alertBox = document.getElementById('alertBox');
                alertBox.style.display = 'block';
            }
        }

        fetch('http://localhost:8081/api/login', OPTIONS)
            .then(res=>res.json())
            .then(json=>checkValidate(json))
    }

    return (
            <div className="login-main-container">
                <form method="POST">
                    <div className="login-container">
                        <div className="login-header">
                            <div className="login-header-1">
                                <img className="login-logo" src={mainLogo} alt="Hello World"/>
                            </div>
                            <div className="login-header-2">
                                <h1>Sign In to Brainflex</h1>
                            </div>
                        </div>
                        <div className="login-handleInput">
                            <input type="text" className="login-textbox-form" id="txtUsername" placeholder="Username"/>
                            <br />
                            <input type="password" className="login-textbox-form" id="txtPassword" placeholder="Password"/>
                            <br />
                            <br />
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label className="remember-check">&nbsp;Remember me</label><br />
                            <br />
                            <br />
                            <input className="submit-btn" type="submit" onClick={(e) => redirect(e)}/>
                            <br />
                            <br />
                            <div className="login-handleInput-footer">
                                <h4>Forgot Password?</h4>
                                <h4>&nbsp;|&nbsp;</h4>
                                <Link to="Signup"><h4>Sign up for Brainflex</h4></Link>
                            </div>

                            <br />

                            <div className={styles.alertBox} id="alertBox">
                                <h3>Incorrect Username or Password</h3>
                            </div>  
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default Login