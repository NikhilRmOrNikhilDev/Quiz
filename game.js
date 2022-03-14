q_turn = "player2";
a_turn = "player1";

player1_score = 0;
player2_score = 0;

player1 = localStorage.getItem("player_1");
player2 = localStorage.getItem("player_2");

function send(){
    document.getElementById("quiz-box").classList.add("quiz-hide");
    document.getElementById("ans-box").classList.add("ans-show");

    num_1 = document.getElementById("num_1").value;
    num_2 = document.getElementById("num_2").value;
    actual_answer = parseInt(num_1) * parseInt(num_2);

    console.log(actual_answer);

    q_num = "<h4>" +  num_1  + " X " +  num_2  + "</h4>"
    document.getElementById("hd1").innerHTML = q_num
}
function check(){
    document.getElementById("ans-box").classList.remove("ans-show");
    document.getElementById("result-box").classList.add("result-active");

    get_ans = document.getElementById("ans-input").value;
    
    if(get_ans == actual_answer){
        if(a_turn == "player1"){
            player1_score = player1_score +1;
            document.getElementById("player_1").innerHTML = player1 + " Score is " + player1_score;
            console.log(player1_score);
        }
        if(a_turn == "player2"){
            player2_score = player2_score +1;
            document.getElementById("player_2").innerHTML = player2 + " Score is " + player2_score;
            console.log(" Player_2 " + player2_score);
        }
    }

    if(q_turn == "player1"){
        q_turn = "player2";
        document.getElementById("questioner").innerHTML = "Question Turn - " + player2;
    }
    if(q_turn == "player2"){
        q_turn = "player1";
        document.getElementById("questioner").innerHTML = "Question Turn - " + player1;
    }
    if(a_turn == "player1"){
        a_turn = "player2";
        document.getElementById("answer").innerHTML = "Answer Turn - " + player2;
    }
    if(a_turn == "player2"){
        a_turn = "player1";
        document.getElementById("answer").innerHTML = "Answer Turn - " + player1;
    }
}