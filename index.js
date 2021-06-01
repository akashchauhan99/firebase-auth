// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD0HhXWnW_2bn7vc0hUJpvluD3P1wEAMeM",
    authDomain: "twfflours-ccccf.firebaseapp.com",
    databaseURL: "https://twfflours-ccccf-default-rtdb.firebaseio.com",
    projectId: "twfflours-ccccf",
    storageBucket: "twfflours-ccccf.appspot.com",
    messagingSenderId: "335949387220",
    appId: "1:335949387220:web:449a40ba24f86aec333241",
    measurementId: "G-8P660JY85E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var birthplace = document.getElementById("birthplace").value;

    auth.createUserWithEmailAndPassword(email, password).then(function() {
        alert("Signed Up");
        var id = auth.currentUser.uid;
        firebase.database().ref("Users/" + id).set({
            userName: name,
            userAge: age,
            userBirthplace: birthplace,
        });
    }).catch(function(error) {
        var errorcode = error.code;
        var errormsg = error.message;
    });
}

function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.signInWithEmailAndPassword(email, password);
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