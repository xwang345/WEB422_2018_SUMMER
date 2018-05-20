console.log("Student Name: Xiaochen Wang Student ID: 015297153");
        console.log("Hello here!");

        //Q1
        $("ul#list > li").each(function(index){
            console.log("addElement");
            $(this).prepend('<b>' + index + ' - ' );
        });

        //Q2
        $("#textBox").keypress(function(event){
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
        var punchTime = 1000;
        var numMistakes = 0;
        var numCorrect = 0;
        var startTime;
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	    var string_length = 1;
        var origCharacter = '';
        
	    for (var i=0; i<string_length; i++) {
		    var rnum = Math.floor(Math.random() * chars.length);
		    origCharacter += chars.substring(rnum,rnum+1);
	    }


        document.getElementById("inputChar").focus();

        // display random char in the upper textbox     
        $("#origChar").val(origCharacter);
        console.log(origCharacter);

        // Game begin and count the time
        var t1 = new Date();
        startTime = t1.getTime();
        console.log("1st start time: " + startTime);

        // compare user input 
        $("#inputChar").keyup(function (event) {
            character_game();
        });

        function character_game() {
            // if it has been too long, increment numMistakes and return
            var t2 = new Date();
            var timePassed = t2.getTime() - startTime;
            $("#addWarning").text("").fadeIn();
                console.log("Time has passed: " + timePassed);

            if (timePassed > punchTime) {
                numMistakes++;
                $("#addWarning").text("Taking toooooooo long").fadeOut(850);
                console.log("Time took toooooo long :(");
        
                origCharacter = chars.charAt(Math.floor(Math.random() * chars.length));
                $("#origChar").val(origCharacter);
                $("#inputChar").val("");
                    
                var t3 = new Date();
                startTime = t3.getTime(); 
            } else {
                var input = $("#inputChar").val();

            if (origCharacter == input) {
                numCorrect++;

                console.log(input);
                console.log("Two characters is the same");
            } else {
                numMistakes++;

                console.log("You was type worry character is:" + input);
                console.log("It is different");
            }

            // clear input box 
            $("#inputChar").val("");

            // mistakes no more than 10 
            if (numMistakes > 5) {
                alert("TOO BAD, GAME OVER!");
                location.reload();
            }

            if ((numCorrect % 5 == 0) && (numCorrect > 0) && (punchTime > 400)) {
                punchTime = punchTime - 100;
                console.log("punchTime is " + punchTime);
            }

            // Generate a new number
            origCharacter = chars.charAt(Math.floor(Math.random() * chars.length));
            $("#origChar").val(origCharacter); // Show on the char

            var t3 = new Date();
            startTime = t3.getTime();
        }
        console.log("win is: " + numCorrect + " mistakes is: " + numMistakes );
    } 