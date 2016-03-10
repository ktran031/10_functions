$(document).ready(readyFunction);

function readyFunction() {

var lightStatus = "off";

$("#light-switch").click(toggleLights);

	function toggleLights() {
	console.log(lightStatus);
	if (lightStatus === "off") {
		lightStatus = "on";

		$("body").addClass("light-on");

		$("body").removeClass("light-off");

		$("#switch-label").text("off");
	}

	else {
		lightStatus = "off";

		$("body").addClass("light-off");

		$("body").removeClass("light-on");

		$("#switch-label").text("on");
	}

	}

}

//Return Function notes

// function addAndPrint(n1, n2) {
// 	var sum = n1 + n2;
// 	//console.log(sum)
// 	alert("I'm great at math");
// 	return sum;
// }

// var result = addAndPrint(8,7);
// console.log(result);


//named function


function foobar(name) {
	alert("hello, " + name);
}

// foobar("world");
// foobar("sam");
// foobar("elvis");

//Anonymous function
function(name) {
	console.log("ello ello, " + name);
}
//give the above function in the function at the bottom
$(document).ready(function(name) {
	console.log("ello ello, " + name);
});

//TO READ ONLINE JQUERY DOCS

$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);

//copy function to } and paste
$("li").hover(hoverOn, hoverOff);

  function hoverOn() {
    $( this ).append( $( "<span> ***</span>" ) );
  }

  function hoverOff() {
    $( this ).find( "span:last" ).remove();
  }