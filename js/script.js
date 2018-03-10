$(document).ready(function($) {
	
	// In this interface, we give users a submit button so we know when they are done. So that's the only part we need to listen to for an event. We'll have our program do all its stuff when they click on submit.
	$(".submit").click(function() {

		// The first thing we want to know is what their name is. We can get that by creating a new variable and making it equal to the value of the input with a class of name
		var userName = $(".name").val();

		// Now we do the same thing, but we need to get the value of dropdown with a class of color.
		var userColor = $(".color").val();

		// Now that we have these two bits of information, we can write our sentence. Since we have a whole other function that returns the finished sentence (below), we can just use that function (called, with any required arguments) as if it was a variable equal to what it returns. And just to be complete, we'll wrap it in P tag
		var sentences = "<p>" + writeSentences(userName, userColor) + "</p>";

		// Now we have our finished sentence, we can set the html of the section with a class of results to be equal to that. 
		$(".results").html(sentences)
	});


	// Our custom, "vanilla" javascript function. It takes two arguments, userName and userColor
	function writeSentences(userName, userColor){
		// string concatenation!
		var firstSentence = "Hi " + userName + "! So your favorite color is "+userColor+"? ";

		// We declare our new variable, but it's basically empty. This is because we're overwriting it in the different if statements. If we don't declare it here, we won't have access to it throughout the rest of the program. 
		var secondSentence = "";

		// Now for the fun part. We want our lil bot to respond different depending on the color, so we can use if statements. In the parathesis we pass the argument we are testing for a true/false response. We use two equal signs because that is for comparison. Only would be assigning.
		if (userColor == "blue") {
			// Overwrite what the second sentence is to reference blue speifically 
			secondSentence = "Like the sky! Beautiful.";
		}
		// Else if next because we're basically saying "okay, if the last one wasn't true try this"
		else if (userColor == "red") {
			secondSentence = "Wow. You must be a passionate person.";
		}
		// Since we know it's not red and it's not blue, we only have one option left — yellow! So we don't need to test for anything, we can just 'else', no parentheses required and respond. 
		else{
			secondSentence = "Gross. I hate yellow.";
		}

		return firstSentence+secondSentence;
	}

});