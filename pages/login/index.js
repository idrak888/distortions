import React, { Component } from 'react';
import Main from '../../layouts/main';
import * as firebase from 'firebase';

class Login extends Component {
    login = e => {
        e.preventDefault();

        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const err = document.querySelector('.err');
        const btn = document.querySelector('.btn-login');

        btn.innerHTML = 'Logging in...';
        btn.disabled = true;

        if (email.value.length < 1 || password.value.length < 1) {
            err.innerHTML = 'Please fill up all inputs';
            btn.disabled = false;
            btn.innerHTML = 'Login';
            setTimeout(() => {
                err.innerHTML = '';
            }, 2000);
        } else {
            firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then(() => {
                window.location = "/";
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                
                btn.innerHTML = 'Login';
                btn.disabled = false;

                err.innerHTML = errorMessage;
                setTimeout(() => {
                    err.innerHTML = '';
                }, 2000);
            });
        }
    }
    render() {
        return (
            <div className="Login">
                <Main>
                    <div className="wrapper">
                        <h2>Login to Distortions</h2>
                        <form>
                            <p>Email</p>
                            <input id="email" type="text" placeholder="example@gmail.com"/>
                            <p>Password</p>
                            <input id="password" type="password" placeholder="password123"/>
                            <br/>
                            <br/>
                            <button onClick={this.login} className="btn btn-success btn-login">Login</button>
                            <br/>
                            <span className="text-danger err"></span>
                            <hr/>
                            <h3>Don't have an account?</h3>
                            <a href="/signup">Sign up now!</a>
                        </form>
                    </div>
                
                </Main>
            </div>
        )
    }
}

export default Login;