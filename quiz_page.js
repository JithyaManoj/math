player1_name=localStorage.getItem("player1_namekey");
player2_name=localStorage.getItem("player2_namekey");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;

document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("question_turn").innerHTML="Question Turn : "+player1_name;
document.getElementById("answer_turn").innerHTML="Answer Turn : "+player2_name;

function send(){
    number_1=document.getElementById("n1").value;
    number_2=document.getElementById("n2").value;
    actual_answer=parseInt(number_1)*parseInt(number_2);

    question_number="<h4>"+number_1+"X"+number_2+"</h4>";
    input_box='<br>ANSWER : <input type="text" id="input_check_box">';
    check_button='<br><br><button class="btn btn-info" onclick="check()">Check</button>';
    row=question_number+input_box+check_button;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value;
    document.getElementById("number_2").value;
 
}

question_turn = "p1";
answer_turn = "p2";

function check() {

    answer = document.getElementById("p_answer").value;
    answer = answer.toLowerCase();
    if (answer == actual_answer) {
        if (answer_turn == "p1") {
            player1_score += 1;
            document.getElementById("player1score").innerHTML = player1_score;
        } else if (answer_turn == "p2") {
            player2_score += 1;
            document.getElementById("player2score").innerHTML = player2_score;
        }
    }
    else{
        window.alert("sorry try again the correct answer is "+actual_answer);
    }
    if (question_turn == "p1") {
        question_turn = "p2";
        answer_turn = "p1";
        document.getElementById("question_turn").innerHTML = "Question Turn  :" + play2;
        document.getElementById("answer_turn").innerHTML = "Answer Turn  :" + play1;
    } else if (question_turn == "p2") {
        question_turn = "p1";
        answer_turn = "p2";
        document.getElementById("question_turn").innerHTML = "Question Turn  :" + player1_name;
        document.getElementById("answer_turn").innerHTML = "Answer Turn  :" + player2_name;

    }

    document.getElementById("output").innerHTML = "";

}