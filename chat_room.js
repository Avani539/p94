
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAqmxb6o7BzhRr0_b2JHrAbCYQF2ImiaBM",
      authDomain: "classtest-e6a74.firebaseapp.com",
      projectId: "classtest-e6a74",
      storageBucket: "classtest-e6a74.appspot.com",
      messagingSenderId: "957096846782",
      appId: "1:957096846782:web:ba0d59bf490b351e1085ef",
      measurementId: "G-GRWR992JYR"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();
function addRoom()
{
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
