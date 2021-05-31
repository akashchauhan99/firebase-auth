    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    var firebaseConfig = {
        apiKey: "AIzaSyAq3M9E4mRtoIV83mAKRsGI80-5rUMPPzM",
        authDomain: "twfflours-8df74.firebaseapp.com",
        projectId: "twfflours-8df74",
        storageBucket: "twfflours-8df74.appspot.com",
        messagingSenderId: "1085168336808",
        appId: "1:1085168336808:web:d0d8bf6f1940df8404279d",
        measurementId: "G-GXGG008BJY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();

    const auth = firebase.auth();

    function signUp() {
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        alert("Signed Up");
    }

    function signIn() {
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        // alert("Signed In" + email);

        //Take User to a different or home page
    }

    function signOut() {
        auth.signOut();
        alert("SignOut");
    }

    auth.onAuthStateChanged(function(user) {
        if (user) {
            var email = user.email;
            alert("Active User " + email);
        } else {
            alert("No Active User");
        }
    });