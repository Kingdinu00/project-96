//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");

    window.location = "index.html";
}

/*function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                      name = message_data['name'];
                      message = message_data['message'];
                      like = message_data['like'];

                      name_with_tag = "<h4>" + name + "<img src = 'tick.png' class = 'user_tick'></h4>"
                      msg_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>"
                      like_button = "<button class = 'btn btn-warning' id = 'firebase_message_id' value =" + like + " onclick = 'updateLike(this.id)'>";
                      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like:  " + like + "</span> </button> <hr>";

                      row = name_with_tag + msg_with_tag + like_button + span_with_tag;
                      document.getElementById("output").value = row;

                      //End code
                }
          });
    });
}
getData();*/

function getData() { firebase.database().ref("/" +room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;  console.log(firebase_message_id); console.log(message_data); name = message_data['name']; message = message_data['message']; like = message_data['like']; name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like +"</span></button><hr>"; row = name_with_tag + message_with_tag +like_button + span_with_tag;

document.getElementById("output").innerHTML += row;  } }); }); } getData();


function updateLike(message_id) {
    console.log("cliced on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_Likes = Number(likes) + 1;
    console.log(updated_Likes);

    firebase.database().ref(room_name).child(message_id).update({
          like: updated_Likes
    });
}