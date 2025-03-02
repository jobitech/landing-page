// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Register with Email and Password (for register.html)
if (document.getElementById('register-form')) {
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('User registered successfully!');
                window.location.href = 'login.html'; // Redirect to login page
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// Login with Email and Password (for login.html)
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('User logged in successfully!');
                // Redirect to a dashboard or home page
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// Google Login (for both pages)
if (document.getElementById('google-login')) {
    document.getElementById('google-login').addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                alert('Logged in with Google!');
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// Facebook Login (for both pages)
if (document.getElementById('facebook-login')) {
    document.getElementById('facebook-login').addEventListener('click', () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                alert('Logged in with Facebook!');
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// LinkedIn Login (for both pages)
if (document.getElementById('linkedin-login')) {
    document.getElementById('linkedin-login').addEventListener('click', () => {
        const provider = new firebase.auth.OAuthProvider('linkedin.com');
        auth.signInWithPopup(provider)
            .then((result) => {
                alert('Logged in with LinkedIn!');
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// GitHub Login (for both pages)
if (document.getElementById('github-login')) {
    document.getElementById('github-login').addEventListener('click', () => {
        const provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                alert('Logged in with GitHub!');
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}
