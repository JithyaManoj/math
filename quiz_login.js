function login() {
    player1_name = document.getElementById("play1").value;
    player2_name = document.getElementById("play2").value;
    localStorage.setItem("player1_namekey", player1_name);
    localStorage.setItem("player2_namekey", player2_name);
    window.location = "quiz-page.html";
}