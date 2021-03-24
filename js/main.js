$(function () {
    let temporaryCards = [];
    let score = 0;
    let aantalGoed = 0;

    function memoryGame() {

        function score () {
            if (score <= 7) {
                $(".star-3").css("background-color", "grey");
            }
        }

        let sec = 0;
        function pad ( val ) { return val > 9 ? val : "0" + val; }

        setInterval( function(){
            $("#seconds").html(pad(++sec%60));
            $("#minutes").html(pad(parseInt(sec/60,10)));
        }, 1000);   
        
        const cards = ["bxl-tux", "bxl-microsoft", "bxl-wikipedia", "bxl-jquery", "bxl-gitlab", "bxl-codepen",
            "bxl-stack-overflow", "bxl-github", "bxl-tux", "bxl-microsoft", "bxl-wikipedia", "bxl-jquery", "bxl-gitlab",
            "bxl-codepen", "bxl-stack-overflow", "bxl-github"];

        //randomize the array
        cards.sort(() => Math.random() - 0.5);

        cards.forEach(function (item) {
            $(".row").append("<div class='col-md-3'><div class='card' data-card='" + item + "'>" + "<i class='show bx " + item + "'>" + "</div></div>");
        });

        //give card the color green when its selected
        $(".card").on("click", function () {

            if (!$(this).hasClass("temporary") && temporaryCards.length <= 1) {
                $(this).addClass("temporary");

                $(this).find(".show").removeClass("show");

                const value = $(this).data("card");
    
                temporaryCards.push(value); //als er een item is aangeklikt pushed de functie hem erin, de value komt van de data-card
    
                if (temporaryCards.length == 2) { //als de temp array gelijk is aan 2 doet hij een check
                    checkCards();
                }
            }

        
        });

        function checkCards() {
            const value = $(this).data("card");

            if (temporaryCards[0] == temporaryCards[1]) { //als de 2 kaarten gelijk zijn aan elkaar dan komt de functie goodcard, anders de functie wrong + een resetCard

                setTimeout(goodCard, 1000); //1000 = 1 sec 

                aantalGoed++;

                finished();
            } else {
                $(".temporary").addClass("wrong").effect("shake");
                setTimeout(resetCard, 2000); //2000 = 2 sec
            }
        }

        function resetCard() { //haalt de temp array leeg voor de volgende keer, en verwijderd alle classen
            $(".wrong").removeClass("wrong temporary");
            temporaryCards = []; 
        }

        function goodCard() { //verwijderd temporary en voegt good toe met een explode effect, daarna haalt hij de temp array leeg
            $(".temporary").removeClass("temporary").addClass("good").effect("explode");
            temporaryCards = [];
        }

        //reload page to restart game
        $(".bx-reset").on("click", function () {
            document.location.reload(); //hiermee reload hij de pagina en begint het spel
        })

        function finished () {
            if (aantalGoed == 8) {
                console.log("finished");
                document.location.href="https://google.nl";

            }
        }

    }

    memoryGame();

});