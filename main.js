function start(){
    document.getElementById("info_box").classList.add("info_active");
}
function exit(){
    document.getElementById("info_box").classList.remove("info_active");
}
function con(){
    document.getElementById("player_name").classList.add("player_box_active");
    document.getElementById("info_box").classList.remove("info_active");
}
function back(){
    document.getElementById("player_name").classList.remove("player_box_active");
    document.getElementById("info_box").classList.add("info_active");
}
function hide(){
    document.getElementById("ok1").innerHTML = "Confirm";
    document.getElementById("ok2").innerHTML = "Confirm";
}
function ok1(){
    document.getElementById("ok1").innerHTML = "✓";

    setTimeout(hide, 2000);
}
function ok2(){
    document.getElementById("ok2").innerHTML = "✓";

    setTimeout(hide, 2000);
}
function con1(){
    player_1 = document.getElementById("player1").value;

    ok1();
}
function con2(){
    player_2 = document.getElementById("player2").value;

    ok2();
}
function next(){
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);

    window.location = "game.html";
}
