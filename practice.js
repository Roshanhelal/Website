
//ADD YOUR FIREBASE LINKS
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAHPtaCD_R0sRbn1wwBtRiu1kVlbwBXhZc",
  authDomain: "kwitter-c8c03.firebaseapp.com",
  databaseURL: "https://kwitter-c8c03-default-rtdb.firebaseio.com",
  projectId: "kwitter-c8c03",
  storageBucket: "kwitter-c8c03.appspot.com",
  messagingSenderId: "512890914691",
  appId: "1:512890914691:web:0001c2c0e37e5d803f58b6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}