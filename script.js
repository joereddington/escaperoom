
var oldDateObj=new Date()
var countDownDate = new Date(oldDateObj.getTime() + minutes*60000);


// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
  document.getElementById("question").innerHTML = question

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    window.location.replace(fail_destination);
  }
}, 1000);

function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (x != answer) {
        text = "Incorrect!";
    } else {
        text = "Correct!";
	    window.location.replace(success_destination);
    }
    document.getElementById("demo2").innerHTML = text;
}

