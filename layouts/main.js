import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC9vWR8G_v1xIgHFyFAxIc1HmAm5YuM7CM",
    authDomain: "distortions-7090c.firebaseapp.com",
    databaseURL: "https://distortions-7090c.firebaseio.com",
    projectId: "distortions-7090c",
    storageBucket: "",
    messagingSenderId: "281460861490",
    appId: "1:281460861490:web:d0d8610ee4b3be8a7faa2b"
};
if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        localStorage.setItem('email', user.email);
    } else {
        localStorage.setItem('email', '');
    }
});

export default ({ children }) => (
  <div>
        <Head>
            <meta charset="UTF-8"/>
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.png" />
            <link rel="shortcut icon" type="image/png" href="/static/favicon.png"/>
            <link rel="apple-touch-icon" href="/static/favicon.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="stylesheet" href="/static/style.css"/>
            <script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
            <title>Distortions</title>
        </Head>
        
        <Header/>
        { children }
        <Footer />
    </div>
)