import Header from '../components/Header';
import Head from 'next/head';

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
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="stylesheet" href="/static/style.css"/>
            <script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js"></script>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <title>Distortions</title>
        </Head>
        
        <Header />
        { children }
    </div>
)