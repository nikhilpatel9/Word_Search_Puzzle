
const arr=[];
let buttonsEnabled = true; // Variable to track if buttons are enabled

$("#Solution").click(function() {
    if (buttonsEnabled) {
        buttonsEnabled = false; // Disable buttons
        showSolution("If you want to show solution then you can't play the game");
        // Enable buttons after 5 seconds
        setTimeout(function() {
            buttonsEnabled = true;
        }, 5000);
    }
});
var answer=0;
let selectedWords = [];
localStorage.setItem('mx', 0.0);
while (selectedWords.length < 13) {
    let randomIndex = Math.floor(Math.random() * wordsArrayExtended.length);
    let randomWord = wordsArrayExtended[randomIndex];
    if (!selectedWords.includes(randomWord)) {
        selectedWords.push(randomWord);
    }
}


var flag =true;
$("#start").click(function() {
    //location.reload();
    if (buttonsEnabled) {
    isPaused = true;
    buttonsEnabled = false;
    showAlert("Do you want to start New Game!")
    }
})
$("#end").click(function() {
    if (buttonsEnabled) {
    isPaused=true;
    buttonsEnabled = false;
    showEnd("Are you want to end this game!")
    // $.each(arr, function(key, item) {
    //     $("#ans").append("<p>" + item + "</p>");
    // });
   // $("#ans").append("<p>" + selectedWord + "</p>");

    //
    }
})
$("#Hint").click(function(){
    if (buttonsEnabled) {
       // buttonsEnabled = false;
    if(flag) {
        
    $.each(selectedWords, function(key, item) {
        $("#hint").append("<p>" + item + "</p>");
    });
    flag=false;
  }else{
    
        $("#hint").empty();
       
    flag=true;
  }
}
})

var selectedWord = "";
function initializeScore() {
    let mx = localStorage.getItem('mx');
    if(mx === null) {
        localStorage.setItem('mx', '0'); // Initialize to 0 if it doesn't exist
        $("#scrno").text('0');
    } else {
        $("#scrno").text(mx); // Set the score from localStorage
    }
}
$(document).ready(function() {
    //fetchWordsList();
    arrangeGame();
    initializeScore();

    $(".individual").mousedown(function() {
        selectedWord = $(this).text();
        $(this).addClass("selected");
        
        $(".individual").on("mouseover", function() {
            selectedWord += $(this).text();
            $(this).addClass("selected");
        });
    }).mouseup(function() {
        $(".individual").off("mouseover");
        
        if (!$("#ans").find("p:contains(" + selectedWord + ")").length && selectedWords.includes(selectedWord)) {
            answer++;
            arr.push(selectedWord);
            //$("#ans").append("<p>" + selectedWord + "</p>");
            $(".selected").addClass("found"); // Add 'found' class to found words
            if(answer==13)
                {
                    var res=countdownTime+1;
                    //answer-=1;
                    answer=(answer*8*(360-countdownTime)/360);
                    if(answer>=100) answer-=8;
                    answer=answer.toFixed(2);
                    $("#mxscrno").append(answer);
                    if(localStorage.getItem('mx') !== null) {
                        let mx = parseFloat(localStorage.getItem('mx')); 
                        mx = Math.max(mx, answer); 
                        localStorage.setItem('mx', mx); 
                        $("#scrno").text(mx);
                    }
                    $.each(arr, function(key, item) {
                        $("#ans").append("<p>" + item + "</p>");
                    });
                    showCustomAlert("Well Done! Your score :",answer);
                }
        }
        
        selectedWord = "";
        $(".individual").removeClass("selected");
        
    }).on("dragstart", function() {
        return false; // Prevents text selection during drag
    });

    $(document).keydown(function() {
        selectedWord = "";
        $(".individual").removeClass("selected");
    });
});

// $(document).ready(function() {
//     arrangeGame();
// });


var tempWord = [];
let gridSize=16;
let letters = $("#letters")
letters.css("--num-letters", `${gridSize}`)
letters.css("--num-cols",`${gridSize}`);
letters.css("grid-template-columns","repeat(var(--num-cols), 1fr)");
letters.css("grid-template-rows","repeat(calc(var(--num-letters) / var(--num-cols)), 1fr));");

function arrangeGame() {
    $("#box").append("Hint");
   // $("#word").append("Word Search Puzzle");
    $("#res").append("Words");
    $("#scr").append("MaxScore");
    $("#mxscr").append("Score");
    for (var i = 1; i <= gridSize; i++) {
        for (var j = 1; j <= gridSize; j++) {
            $("#letters").append("<div class='individual' data-row='" + i + "' data-col='" + j + "'></div>");
        }
    }
    placeCorrect(selectedWords);
      placeCorrect(tempWord);
   $.each($(".individual"),function(key, item) {
    if($(item).attr("data-word") == undefined)
        $(this).html(randomLetter());
   })
}

function randomLetter() {
    var alphabets ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabets.charAt(Math.floor(Math.random() * 26));
}

function checkOccupied(word, starting, orientation) {
    var status = "";
    var incrementBy = 0;
    if (orientation == "row") {
        incrementBy = 1;
    } else if (orientation == "column") {
        incrementBy = gridSize;
    }else if (orientation == "diagonal") {
        incrementBy = gridSize+1;
    }
    for (var p = starting, i = 0; i < word.length; i++) {
        if ($(".individual:eq(" + p + ")").attr("data-word") == undefined)
            status = "empty";
        else {
            status = "occupied";
            break;
        }
        p += incrementBy;
    }
    return status;
}

function placeCorrect(myArr) {
    var positions = ["row", "column","diagonal"];
    var nextLetter = 0;
    var newStart = 0;

    for (var i = 0; i < myArr.length; i++) {
        var orientation = positions[Math.floor(Math.random() * positions.length)];
        var start = Math.floor(Math.random() * $(".individual").length);
        var myRow = $(".individual:eq(" + start + ")").data("row");
        var myColumn = $(".individual:eq(" + start + ")").data("col");

        if (orientation == "row") {
            nextLetter = 1;
            if (myColumn * 1 + myArr[i].length <= gridSize) {
                newStart = start;
            } else {
                var newColumn = gridSize - myArr[i].length;
                newStart = $(".individual[data-row='" + myRow + "'][data-col='" + newColumn + "']").index();
            }
        } else if (orientation == "column") {
            nextLetter = gridSize;
            if (myRow + myArr[i].length <= gridSize) {
                newStart = start;
            } else {
                var newRow = gridSize - myArr[i].length;
                newStart = $(".individual[data-row='" + newRow + "'][data-col='" + myColumn + "']").index();
            }
        }else if(orientation=="diagonal")
        {
            nextLetter=gridSize+1;
            if (myColumn * 1 + myArr[i].length <= gridSize && myRow * 1 + myArr[i].length <= gridSize)
            newStart=start;
            if(myColumn * 1 + myArr[i].length >gridSize)
            {
                var newColumn = gridSize - myArr[i].length;
                newStart = $(".individual[data-row='" + myRow + "'][data-col='" + newColumn + "']").index();
            }
            if (myRow * 1 + myArr[i].length >gridSize) 
            {
                var newRow = gridSize - myArr[i].length;
                newStart = $(".individual[data-row='" + newRow + "'][data-col='" + myColumn + "']").index();
            }
            if (myColumn * 1 + myArr[i].length > gridSize && myRow * 1 + myArr[i].length > gridSize)
            {
                var newColumn = gridSize - myArr[i].length;
                var newRow = gridSize    - myArr[i].length;
                newStart = $(".individual[data-row='" + newRow + "'][data-col='" + newColumn + "']").index();

            }
        }

        var characters = myArr[i].split("");
        var nextPosition = 0;
        var occupied = checkOccupied(myArr[i], newStart, orientation);

        if (occupied == "empty") {
            $.each(characters, function(key, item) {
                $(".individual:eq(" + (newStart + nextPosition) + ")").html(item);
                $(".individual:eq(" + (newStart + nextPosition) + ")").attr("data-word", myArr[i]);
              // $("#Solution").click(function(){
                   // $(".individual:eq(" + (newStart + nextPosition) +")").css("background","yellow");
                //});
                nextPosition += nextLetter;
            });
        } else {
            tempWord.push(myArr[i]);
        }
    }
}


let countdownTime = 360; 
let isPaused = false;
function updateCountdown() {
    if(!isPaused) {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    document.getElementById('countdown').textContent = ` ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    countdownTime--; 
    if (countdownTime < 0) {
        clearInterval(countdownInterval);
        showScore();
     }
    }
}

function showScore(){
    var res=countdownTime+1;
    //answer-=1;
    answer=(answer*8*(360-countdownTime)/360);
    if(answer>=100) answer-=8;
    answer=answer.toFixed(2);
    $("#mxscrno").append(answer);
    if(localStorage.getItem('mx') !== null) {
        let mx = parseFloat(localStorage.getItem('mx')); 
        mx = Math.max(mx, answer); 
        localStorage.setItem('mx', mx); 
        $("#scrno").text(mx);
    }
    $.each(arr, function(key, item) {
        $("#ans").append("<p>" + item + "</p>");
    });
    showCustomAlert("Time Out! Your Score:" +answer);
}
let countdownInterval = setInterval(updateCountdown, 1000);
function showCustomAlert(message) {
    var alertContainer = document.createElement("div");
    alertContainer.className = "custom-alert";

    var messageElement = document.createElement("p");
    messageElement.textContent = message || "Default message"; 
    alertContainer.appendChild(messageElement);
    var closeButton = document.createElement("button");
    closeButton.textContent = "New Game";
    closeButton.onclick = function() {

        alertContainer.remove(); 
        showScore();
        location.reload();
        //$("#start").click();
    };
    alertContainer.appendChild(closeButton);
    
    document.body.appendChild(alertContainer);
}
function showAlert(message){
    var alertContainer = document.createElement("div");
    alertContainer.className = "start-alert";

    var messageElement = document.createElement("p");
    messageElement.textContent = message || "Default message"; 
    alertContainer.appendChild(messageElement);
    var closeButton = document.createElement("button");
    var continueButton= document.createElement("button");
    closeButton.textContent = "New Game";
    closeButton.onclick = function() {

        alertContainer.remove(); 
        showScore();
        location.reload();
        //$("#start").click();
    };
   
    continueButton.textContent = "Resume";
    continueButton.onclick = function() {
        buttonsEnabled = true;
        alertContainer.remove(); 
        isPaused=false;

        return;
    }
    alertContainer.appendChild(closeButton);
    alertContainer.appendChild(continueButton);
    document.body.appendChild(alertContainer);
}
function showEnd(message){
    var alertContainer = document.createElement("div");
    alertContainer.className = "start-alert";

    var messageElement = document.createElement("p");
    messageElement.textContent = message || "Default message"; 
    alertContainer.appendChild(messageElement);
    var closeButton = document.createElement("button");
    var continueButton= document.createElement("button");
    closeButton.textContent = "End Game";
    closeButton.onclick = function() {

        alertContainer.remove(); 
    //     countdownTime=10;
    //     updateCountdown();
    // $.each(arr, function(key, item) {
    //     $("#ans").append("<p>" + item + "</p>");
    // });
        
        showScore();
       // location.reload();
        //$("#start").click();
    };
    continueButton.textContent = "Resume";
    continueButton.onclick = function() {
        buttonsEnabled = true;
        alertContainer.remove(); 
        isPaused=false;

        return;
    }
    alertContainer.appendChild(closeButton);
    alertContainer.appendChild(continueButton);
    document.body.appendChild(alertContainer);
}
function showSolution(message){
    var alertContainer = document.createElement("div");
    alertContainer.className = "start-alert";

    var messageElement = document.createElement("p");
    messageElement.textContent = message || "Default message"; 
    alertContainer.appendChild(messageElement);
    var closeButton = document.createElement("button");
    var continueButton= document.createElement("button");
    closeButton.textContent = "Show Solution";
    closeButton.onclick = function() {

        alertContainer.remove(); 
        $.each($(".individual"), function(key, item) {
            if ($(item).attr("data-word") != undefined) {
                if ($(this).css("background-color") == "rgba(0, 0, 0, 0)") {
                    $(this).css("background-color", "red");
                    $(this).css("color", "white");
                }
            }
        });
        countdownTime=5;
        updateCountdown();
        //showScore();
        //location.reload();
        //$("#start").click();
    };
    continueButton.textContent = "Resume";
    continueButton.onclick = function() {
        buttonsEnabled = true;
        alertContainer.remove();  
        isPaused=false;

        return;
    }
    alertContainer.appendChild(closeButton);
    alertContainer.appendChild(continueButton);
    document.body.appendChild(alertContainer);
}
let mx = localStorage.getItem('mx');
if (mx) {
    $("#scrno").text(mx);
} else {
    $("#scrno").text("0");
}
$("#scrno").text(mx);




