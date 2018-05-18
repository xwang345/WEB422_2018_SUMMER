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
(function($){
	var names, randomNames, i, j, newArray = [], removeItem, emptyArray;
	names = [
		'Alikhan',
		'Arunkumar N',
		'Asfath',
		'Dicson',
		'Latha K',
		'Logesh Kumar',
		'Meena K',
		'Mohamaed Ismail',
		'Moorthy G',
		'Naren',
		'Raja Ovireddy',
		'Rajesh P',
		'Siddarthan KA',
		'Vijaya Kumar'
	];
	document.getElementById('players').innerHTML = names;
	$('#character').click(function() {
		randomNames = names[Math.floor(Math.random() * names.length)];
		document.getElementById('sltdPer').innerHTML = randomNames;
		$('#remPerBlk').show();
		for(i=0; i< names.length; i++) {
			if(randomNames === names[i]) {
				removeItem = randomNames;
				names.splice($.inArray(removeItem, names), 1);
				document.getElementById('remPers').innerHTML = names;
				for(j=0; j<names.length+1; j++) {
					newArray[j] = removeItem;
				}
			}
		}
		emptyArray = jQuery.isEmptyObject(names);
		if(emptyArray === true) {
			$.merge(names, newArray);
		}
	});
})(jQuery);
