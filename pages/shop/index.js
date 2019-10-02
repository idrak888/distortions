import React, { Component } from 'react';
import Main from '../../layouts/main';
import * as firebase from 'firebase';

class Shop extends Component {
    state = {
        email: ''
    }
    componentDidMount() {
        const email = localStorage.getItem('email');
        this.setState({email});
    }
    jsx = () => {
        if (this.state.email == '') {
            return (
                <div className="wrapper">
                    <h1>Please login to continue</h1>
                    <br/>
                    <a href="/login"><button className="btn btn-success">Login page</button></a>
        
                </div>
            )   
        } else {
            return (
                <div className="wrapper">
                    <h1>Logged in with {this.state.email}</h1>
                    <button onClick={this.logout} className="btn btn-danger">Log out</button>
                </div>
            )   
        }
    }
    logout = () => {
        firebase.auth().signOut().then(() => {
            window.location = '/';
        });
    }
    render() {
        return (
            <div className="Shop">
                <Main>
                    {this.jsx()}
                </Main>
            </div>
        );
    }
}

export default Shop;