// 1. Use jQuery to fetch all `h1` tags and save them to a variable called $h1

const $h1 = $("h1");
console.log($h1);

// 2. Grab the HTML element that is both an H1 and has an ID of "second"

const $second = $("h1#second");
console.log($second)
;

// 3. Select the div with an ID of 'myDiv' and change the text to say "jQuery makes JS easy!"

//using regular vanilla JS you'd...
//const myDiv = document.getELementById("myDiv");
//myDiv.innerHTML = "Goodnight World!";

//using jQuery
$("#myDiv").text("jQuery makes JS easy!");

// you can console.log to find out what the value of #myDiv is wihtout changing anything by using .text()
console.log($("#myDiv"));

// 4. Append this image to end of the body. http://www.fillmurray.com/200/200

// $("body").append("<img src= 'http://www.fillmurray.com/200/200' />")

// 4b. make bill hide and show
const $bill = $("<img src='http://www.fillmurray.com/200/200' />").hide();
$('body').append($bill);

// to make bill slide down
$bill.slideDown(2000);

// 4c. to make bill fade in
$bill.fadeIn(2000);

// 5. Change the background color of the page to green.
$("body").css("background-color", "coral");

// 6. Remove the div with and ID of 'myDiv'
$("#myDiv").remove();