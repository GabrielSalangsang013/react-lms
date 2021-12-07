import React from "react";
import { Link } from "react-router-dom";
import mainLogo from '../images/logo.png';
import './Signup.css'
import styles from './Signup.module.css';

const Login = () => {
    
    const sendData = (e) => {
        e.preventDefault();

        let txtUsername = document.querySelector('#txtUsername');
        let txtPassword = document.querySelector('#txtPassword');
        let txtType = document.querySelector('input[name="txtType"]:checked');
        let RetypeTxtPassword = document.querySelector('#RetypeTxtPassword');
        let alertBox = document.querySelector('#alertBox');
        let terms = document.querySelector('#terms');

        
        let text = txtPassword.value.trim();
        let result = false;
        // eslint-disable-next-line
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; 
        var format2 = /[0123456789]+/; 
        if(format.test(text)){
            if(format2.test(text)) {
                result = true;
            }
        } else {
          result = false;
        }


        if(terms.checked === true) {
            if(txtUsername.value === '' || txtPassword.value === '' || RetypeTxtPassword.value === '' || !txtType) {
                alertBox.style.display = 'block';
                alertBox.innerText = 'Complete the form';
            }else if(txtPassword.value !== RetypeTxtPassword.value) {
                alertBox.style.display = 'block';
                alertBox.innerText = 'Password and Retype Password are mismatch';
            }else if(result === false){
                alertBox.style.display = 'block';
                alertBox.innerText = 'Password must contains Special Characters and Numbers';
            }else {
                alertBox.style.display = 'none';
                alertBox.innerText = 'Alert Box';
    
                let newID = () => {
                    const head = Date.now().toString(36);
                    const tail = Math.random().toString(36).substr(2);
                    return newID = head + tail;
                }
        
                const DATA = {
                    username: txtUsername.value.trim(),
                    password: txtPassword.value.trim(),
                    type: txtType.value,
                    id: newID()
                }
        
                const OPTIONS = {
                    method: "POST",
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify(DATA),
                }

                let goToCondition = (data) => {
                    if(data.result === 'Username or Password has already exist') {
                        alertBox.style.display = 'block';
                        alertBox.innerText = 'Username or Password has already exist';
                    }else {
                        alertBox.style.display = 'none';
                        alertBox.innerText = 'Alert Box';
                        window.location.href = '/';
                    }
                }
        
                fetch('http://localhost:8081/signup/create', OPTIONS)
                    .then(res=>res.json())
                    .then(data=>goToCondition(data));
            }
        }else {
            alertBox.style.display = 'block';
            alertBox.innerText = 'Accept the terms of Use';
        }

        
    }

    return (
        <div className="form-container">
                <form className="login-form" >
                    <div className="login-form-header">
                        <div className="form-header-1">
                        <img src={mainLogo} className="logo" alt="Logo"/>
                        </div>
                        <div className="form-header-2">
                            <h2>Let's Sign Up</h2>
                            <Link to="/"><h6 className="go-back">Go back</h6></Link>
                        </div>
                    </div>

                    <div className="login-form-main">
                        <input type="text" name="txtUsername" id="txtUsername" className="textbox-form" placeholder="Username" />
                        <input type="password" name="txtPassword" id="txtPassword" className="textbox-form" placeholder="Password"/>
                        <input type="password" id="RetypeTxtPassword" className="textbox-form" placeholder="Re-type Password"/>
                        <br />
                        <br />
                        <h4>Type of Account:</h4>
                        <input type="radio" className="type-account" name="txtType" id="Student" value="Student" />
                        <label htmlFor="Student">Student</label>
                        <input type="radio" className="type-account" name="txtType" id="Teacher" value="Teacher" />
                        <label htmlFor="Teacher">Teacher</label>

                        <br/>
                        <br/>
                        <input type="checkbox" id="terms" name="terms" value="terms" />
                        <label htmlFor="terms">I agree to the <strong>Terms of Use</strong></label><br />
                        <br/>
                        <br/>
                        <button className="submit-btn" onClick={(e) => sendData(e)}>Submit</button>

                        <br/>
                        <br/>
                        <div className={styles.alertBox} id="alertBox">Alert Box</div>  
                    </div>
                </form>


        </div>
    )
}

export default Login