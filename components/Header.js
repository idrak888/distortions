import React from 'react';

const Header = props => {
    const toggleNavbar = e => {
        e.preventDefault();
        const nav = document.querySelector('.nav');
        if (nav.style.display == 'none' || nav.style.display == '') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }
    return (
        <div className="Header">
            <div className="navbar">
                <a onClick={toggleNavbar} href="/"><img className="bars" src="https://cdn4.iconfinder.com/data/icons/social-messaging-productivity-black-4/127000/18-512.png"/></a> <img className="logo" src="../static/logo.png"/> <a href="#"><img src="https://media.giphy.com/media/fqb5mQi7eHcqUxv2TK/giphy.gif" className="cart"/></a>
            </div>
            <div className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About Son Junwoo</a></li>
                </ul>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <img src="../static/products.png" width="400"/>
                </div>
                <div className="col-sm-6">
                    <h3>The all new</h3>
                    <h1>DISTORTION 2 HIGH</h1>
                    <h3>By Son Junwoo</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;