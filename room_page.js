const firebaseConfig = {
    apiKey: "AIzaSyB7ZjgE-w2pDp05K1nsL0R3eVrw8OyLCJY",
    authDomain: "c-93-404de.firebaseapp.com",
    databaseURL: "https://c-93-404de-default-rtdb.firebaseio.com",
    projectId: "c-93-404de",
    storageBucket: "c-93-404de.appspot.com",
    messagingSenderId: "747873420974",
    appId: "1:747873420974:web:01a56c555fd1e868f9cf3f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "To add rooms"
    })

    localStorage.setItem("room_name" , room_name);
    window.location = "message_page.html";
}


function getData() {
    firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name - " + Room_names);
                row = "<div class = 'output_room_name' id = "+Room_names+"  onclick = 'redirecttoRoomName(this.id)'> #" +Room_names +"</div> <hr>";
                document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirecttoRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "message_page.html";
}

getData();

function logout () {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location = "index.html";
}
