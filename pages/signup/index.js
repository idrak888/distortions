import React, { Component } from 'react';
import Main from '../../layouts/main';
import * as firebase from 'firebase';

class SignUp extends Component {
    signup = e => {
        e.preventDefault();

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const name = document.querySelector('#username').value;

        const err = document.querySelector('.err');
        const btn = document.querySelector('.btn-login');

    
        if (name.length < 1) {
            err.innerHTML = "Please fill all inputs";
            setTimeout(() => {
                err.innerHTML = '';
            }, 2000);
        } else {
            btn.innerHTML = 'Signing up...';
            btn.disabled = true;
            
            //create user with firebase
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                btn.innerHTML = 'Sign up';
                btn.disabled = false;
                user.updateProfile({
                    displayName: name
                }).then(() => {
                    console.log(user);
                    window.location = "/";
                }, (error) => {
                    
                });
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                err.innerHTML = errorMessage;

                btn.innerHTML = 'Sign up';
                btn.disabled = false;

                setTimeout(() => {
                    err.innerHTML = '';
                }, 2000);
            });
        }
    }
    render() {
        return (
            <div className="SignUp">
                <Main>
                    <div className="wrapper">
                        <h2>Create an account</h2>
                        <form>
                            <p>Username</p>
                            <input id="username" type="text" placeholder="John Doe"/>
                            <p>Email</p>
                            <input id="email" type="text" placeholder="example@gmail.com"/>
                            <p>Password</p>
                            <input id="password" type="password" placeholder="password123"/>
                            <br/>
                            <br/>
                            <button onClick={this.signup} className="btn btn-success btn-login">Sign Up</button>
                            <br/>
                            <span className="text-danger err"></span>
                            <hr/>
                            <h3>Already have an account?</h3>
                            <a href="/login">Login</a>
                        </form>
                    </div>
                
                </Main>
            </div>
        )
    }
}

export default SignUp;