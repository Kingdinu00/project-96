function adduser() {
    user_name = document.getElementById("user_name_input").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "room_page.html";
}