
function trivial() {
    let triviaAnswer = document.getElementById("trivial-answer")

    let swimSelected = document.getElementById("swim").checked;
    let driveSelected = document.getElementById("drive").checked;
    let boardSelected =  document.getElementById("board").checked;

    if (swimSelected) (
        triviaAnswer.innerHTML = "Fred can swim"
    )
    else if (driveSelected) (
        triviaAnswer.innerHTML = "Fred's a good driver especially compared to his classmates"
    )
    else if (boardSelected) (
        triviaAnswer.innerHTML = "You're correct, Fred can wakeboard but not snowboard"
    )
}