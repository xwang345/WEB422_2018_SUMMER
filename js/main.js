// Student Name: Xiaochen Wang Student ID: 015297153
console.log("Hello");
// function appendText(){
//     console.log("addElement");
//     var Element1 = "<li> Frist Name: <b> Xiaochen </b></li>";
//     var Element2 = "<li> Last Name: <b> Wang </b></li>";
//     var Element3 = "<li> Course Title: <b> WEB422 </b></li>";

//     var addElement = document.createElement("li");
//     txt3.innerHTML = "Text.";
//     $("body").append(Element1,Element2,Element3); 
// }

//Q1
$("ul#list > li").each(function(index){
    console.log("addElement");
    $(this).prepend('<b>' + index + ' - ' );
});

//Q2
$("#textBox").keypress(function(event)    
    {
        event.preventDefault(); 
    });

//Q3
var lastClick, timeDiff;
    $("#Cultime").click(function(event){
        if(lastClick){
            timeDiff = event.timeStamp - lastClick; 
            $(".Cultime").append("Time difference between 2 clicks is " + timeDiff + " milliseconds." + "<br>");
        }else{
            $(".Cultime").append("<br>Click button again <br>");
        }; 

        lastClick = event.timeStamp; 
    });

//04
$( "#testInput" ).on( "keydown", function(event) {
  $( "#log" ).html( event.type + ": " +  event.which );
});

//05
function randomCharacter() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 1;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.randform.randomfield.value = randomstring;
	console.log(randomstring);
}