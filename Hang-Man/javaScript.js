
        // Globals
        var clue
        var solvingClue
        var string
        var length
        var solvingClue2 

        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------
        
        // Replace function
        function setCharAt(str,index,chr) {
            if(index > str.length-1) return str;
            str = str.substring(0,index) + chr + str.substring(index+1);
        }

        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------

        // Drop down
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------

        function startGame() {
            
            // Function working
            console.log("Function working")
            document.getElementById("show-text").style.display = 'block';
            document.getElementById("overlay").style.display = "block";

        }

        function submitBtn() {

            console.log("Submit function working");

            string = document.getElementById("word").value;
            length = string.length;
            let characters = [];
            let characters2 = [];

            console.log(string)
            console.log(length)
            console.log(characters)

            document.getElementById("show-firstContent").style.display = 'none';
            document.getElementById("show-text").style.display = 'none';
            document.getElementById("overlay").style.display = "none";

            // Initialise the counter
            var counter = 0

            // If statement to determine the clue
            for (; counter < length; counter++) {

                // Checking variables
                console.log(string.charAt(counter));

                if (string.charAt(counter) == " ") {
                    console.log("Space " + counter);
                    characters[counter] = "/";
                } else if (string.charAt(counter) == "-"){
                    console.log("Dash " + counter)
                    characters[counter] = "-";
                } else {
                    console.log("Letter " + counter)
                    characters[counter] = "_";
                }
            }

            var counter = 0

            // If statement to determine the solving clue
            for (; counter < length; counter++) {

                // Checking variables
                console.log(string.charAt(counter));

                if (string.charAt(counter) == " ") {
                    console.log("Space " + counter);
                    characters2[counter] = " ";
                } else if (string.charAt(counter) == "-"){
                    console.log("Dash " + counter)
                    characters2[counter] = "-";
                } else {
                    console.log("Letter " + counter)
                    characters2[counter] = "_";
                }
            }

            //initialise variables
            clue = characters[0] + " "
            solvingClue2 = characters2[0]

            // loop to set clue
            counter = 1
            for (; counter < length; counter++) {
                clue = clue + characters[counter] + " "
            }
            

            // loop to set second clue
            counter = 1
            for (; counter < length; counter++) {
                solvingClue2 = solvingClue2 + characters2[counter]
            }

            console.log(clue)
            console.log(solvingClue2)
            solvingClue = clue

            document.getElementById("show-secondContent").style.display = 'block';
            document.getElementById("hint").innerHTML = solvingClue;
        }

        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------

        var counter = 0

        function guess() {

            // checking to see if function works
            console.log("Function works" + counter)
            console.log(solvingClue2)

            var guesses = []
            var wrongGuesses = ""
            var loop 
            var images = ["images/Image 22-05-2022 at 18.39 2.jpg",
                          "images/Image 22-05-2022 at 18.39.jpg",
                          "images/Image 22-05-2022 at 18.41.jpg",
                          "images/Image 22-05-2022 at 18.42 2.jpg",
                          "images/Image 22-05-2022 at 18.42 (1).jpg",
                          "images/Image 22-05-2022 at 18.42.jpg"]
            
            // checking to see if user wins
            if (solvingClue2 === string) {
                winScreen()
            } else 

            // checking to see if user lost
            { if (counter === 6) {
                lossScreen()
            } else {

            // code to determine guesses
            guesses[counter] = document.getElementById("guess").value;


            if (string.includes(guesses[counter])) 
            {

                for (loop = 0; loop < length + 1;) {

                    if (string.charAt(loop - 1) == guesses[counter])
                    {
                    
                        solvingClue = solvingClue.substring(0, loop * 2 - 2) + guesses[counter] + solvingClue.substring(loop * 2 - 1)
                        solvingClue2 = solvingClue2.substring(0, loop-1) + guesses[counter] + solvingClue2.substring(loop)

                        document.getElementById("hint").innerHTML = solvingClue;

                    }
                    loop = loop + 1
                }
            } else {

                document.getElementById("hangManImage").src = images[counter];

                console.log(guesses[counter])
                wrongGuesses = guesses[counter] 

                counter = counter + 1;

                document.getElementById("guessesBox").innerHTML = wrongGuesses;
                console.log(wrongGuesses);
            }

            var letterCounter
            var letter = []

            for (let letterCounter = 0; letterCounter < length + 1; letterCounter++) {
            letter[letterCounter] = string.charAt(letterCounter)
            }

                }

        }

        // checking to see if user wins
        if (solvingClue2 === string) {
            winScreen()
        }

        // checking to see if user lost
         if (counter === 6) {
            lossScreen()
        }
    }

        //------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------

        function lossScreen() {
            document.getElementById("overlay").style.display = "block";
            document.getElementById("lossScreen").style.display = "block";
        }

        function winScreen() {
            document.getElementById("overlay").style.display = "block";
            document.getElementById("winScreen").style.display = "block";
        }

        function restart() {
            location.reload()
        }
    
