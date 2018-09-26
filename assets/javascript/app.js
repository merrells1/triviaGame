//global variable list
var numOfcorrectAnswers = 0;
var numOfincorrectAnswers = 0;
var q1Guesses = ['checkBox1a', 'checkBox2a', 'checkBox3a', 'checkBox4a'];
var q2Guesses = ['checkBox1b', 'checkBox2b', 'checkBox3b', 'checkBox4b'];
var q3Guesses = ['checkBox1c', 'checkBox2c', 'checkBox3c', 'checkBox4c'];
var q4Guesses = ['checkBox1d', 'checkBox2d', 'checkBox3d', 'checkBox4d'];
var q5Guesses = ['checkBox1e', 'checkBox2e', 'checkBox3e', 'checkBox4e'];
var q6Guesses = ['checkBox1f', 'checkBox2f', 'checkBox3f', 'checkBox4f'];
var q7Guesses = ['checkBox1g', 'checkBox2g', 'checkBox3g', 'checkBox4g'];
var q8Guesses = ['checkBox1h', 'checkBox2h', 'checkBox3h', 'checkBox4h'];
var q9Guesses = ['checkBox1i', 'checkBox2i', 'checkBox3i', 'checkBox4i'];
var q10Guesses = ['checkBox1j', 'checkBox2j', 'checkBox3j', 'checkBox4j'];
var q1CorrectAnswer = 'checkBox2a';
var q2CorrectAnswer = 'checkBox2b';
var q3CorrectAnswer = 'checkBox3c';
var q4CorrectAnswer = 'checkBox2d';
var q5CorrectAnswer = 'checkBox4e';
var q6CorrectAnswer = 'checkBox2f';
var q7CorrectAnswer = 'checkBox1g';
var q8CorrectAnswer = 'checkBox2h';
var q9CorrectAnswer = 'checkBox3i';
var q10CorrectAnswer = 'checkBox1j';

//startButton functions
$("#startButton").on("click", function(){
    if (timerStarted === false) {
        $('#checkBox1a').prop( "checked", false );
        $('#checkBox2a').prop( "checked", false );
        $('#checkBox3a').prop( "checked", false );
        $('#checkBox4a').prop( "checked", false );
        $('#checkBox1b').prop( "checked", false );
        $('#checkBox2b').prop( "checked", false );
        $('#checkBox3b').prop( "checked", false );
        $('#checkBox4b').prop( "checked", false );
        $('#checkBox1c').prop( "checked", false );
        $('#checkBox2c').prop( "checked", false );
        $('#checkBox3c').prop( "checked", false );
        $('#checkBox4c').prop( "checked", false );
        $('#checkBox1d').prop( "checked", false );
        $('#checkBox2d').prop( "checked", false );
        $('#checkBox3d').prop( "checked", false );
        $('#checkBox4d').prop( "checked", false );
        $('#checkBox1e').prop( "checked", false );
        $('#checkBox2e').prop( "checked", false );
        $('#checkBox3e').prop( "checked", false );
        $('#checkBox4e').prop( "checked", false );
        $('#checkBox1f').prop( "checked", false );
        $('#checkBox2f').prop( "checked", false );
        $('#checkBox3f').prop( "checked", false );
        $('#checkBox4f').prop( "checked", false );
        $('#checkBox1g').prop( "checked", false );
        $('#checkBox2g').prop( "checked", false );
        $('#checkBox3g').prop( "checked", false );
        $('#checkBox4g').prop( "checked", false );
        $('#checkBox1h').prop( "checked", false );
        $('#checkBox2h').prop( "checked", false );
        $('#checkBox3h').prop( "checked", false );
        $('#checkBox4h').prop( "checked", false );
        $('#checkBox1i').prop( "checked", false );
        $('#checkBox2i').prop( "checked", false );
        $('#checkBox3i').prop( "checked", false );
        $('#checkBox4i').prop( "checked", false );
        $('#checkBox1j').prop( "checked", false );
        $('#checkBox2j').prop( "checked", false );
        $('#checkBox3j').prop( "checked", false );
        $('#checkBox4j').prop( "checked", false );
        checkTime();
        console.log(checkTime);
    } else if (timerStarted === true) {
        $('#checkBox1a').prop( "checked", true );
        $('#checkBox2a').prop( "checked", true );
        $('#checkBox3a').prop( "checked", true );
        $('#checkBox4a').prop( "checked", true );
        $('#checkBox1b').prop( "checked", true );
        $('#checkBox2b').prop( "checked", true );
        $('#checkBox3b').prop( "checked", true );
        $('#checkBox4b').prop( "checked", true );
        $('#checkBox1c').prop( "checked", true );
        $('#checkBox2c').prop( "checked", true );
        $('#checkBox3c').prop( "checked", true );
        $('#checkBox4c').prop( "checked", true );
        $('#checkBox1d').prop( "checked", true );
        $('#checkBox2d').prop( "checked", true );
        $('#checkBox3d').prop( "checked", true );
        $('#checkBox4d').prop( "checked", true );
        $('#checkBox1e').prop( "checked", true );
        $('#checkBox2e').prop( "checked", true );
        $('#checkBox3e').prop( "checked", true );
        $('#checkBox4e').prop( "checked", true );
        $('#checkBox1f').prop( "checked", true );
        $('#checkBox2f').prop( "checked", true );
        $('#checkBox3f').prop( "checked", true );
        $('#checkBox4f').prop( "checked", true );
        $('#checkBox1g').prop( "checked", true );
        $('#checkBox2g').prop( "checked", true );
        $('#checkBox3g').prop( "checked", true );
        $('#checkBox4g').prop( "checked", true );
        $('#checkBox1h').prop( "checked", true );
        $('#checkBox2h').prop( "checked", true );
        $('#checkBox3h').prop( "checked", true );
        $('#checkBox4h').prop( "checked", true );
        $('#checkBox1i').prop( "checked", true );
        $('#checkBox2i').prop( "checked", true );
        $('#checkBox3i').prop( "checked", true );
        $('#checkBox4i').prop( "checked", true );
        $('#checkBox1j').prop( "checked", true );
        $('#checkBox2j').prop( "checked", true );
        $('#checkBox3j').prop( "checked", true );
        $('#checkBox4j').prop( "checked", true );  
    }
});
//timer function countdownTime
var timerStarted = false;
var total_seconds = 120;
var totalTime = 60 * 2;
var c_minutes = parseInt(totalTime/60);
var c_seconds = parseInt(totalTime%60);
function checkTime () {
    document.getElementById('timeLeft').innerHTML //I am having an issue here that I cannot resolve...
    = 'Time Left: ' + c_minutes + 'minutes' + c_seconds + 'seconds';
    if (total_seconds <= 0){
        setTimeout('add function()' ,1);
    } else {
        total_seconds = total_seconds -1;
        c_minutes = parseInt(total_seconds/60);
        c_seconds = parseInt(total_seconds%60);
        setTimeout(checkTime, 1000);
}};
setTimeout(checkTime, 1000);

function gameApp () {
    if (q1CorrectAnswer === checkBox2a) {
        //add 1 to correct answer array;//
      }

   
}

/*Pseudocode

*create a top and bottom title div for the game's title to be displayed
*list all 10 questions and their pictures and put them into #questionBox (in HTML)
*create a start button and initialize the timer when it is clicked
    -timer set for 2 minutes (2000 ms)
    -timer activated .on(click) 
        - if the user makes a guess for all 10 questions, stop (break?) the timer function and go to #right and #wrong script
        - if all questions are not answered, then alert "Time Up" and reset the game
*Create "#right Script" (this is run after all 10 questions (or however are guessed in available time)) are answered
    -when a user takes a guess on a question, loop through the q1AnswerArray
        -if userGuess === q1CorrectAnswer, add 1 to a new array for correct answers
*Create "#wrong Script" (this is run after all 10 questions (or however are guessed in available time)) are answered
    -when a user takes a guess on a question, loop through the q1AnswerArray
        -if userGuess is not equal to q1CorrectAnswer, add 1 to a new array for wrong answers
*Create a game reset function that removes all check-marks and resets the wins and losses to 0



    

*/