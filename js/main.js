$(function () {
    let temporaryCards = [];

    function memoryGame() {
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
            $(this).addClass("temporary");
            $(this).find(".show").removeClass("show");

            const value = $(this).data("card");

            temporaryCards.push(value);

            if (temporaryCards.length == 2) {
                checkCards();

            }
        });

        function checkCards() {
            const value = $(this).data("card");

            if (temporaryCards[0] == temporaryCards[1]) {
                console.log("juist");
                temporaryCards = [];
                console.log(temporaryCards);
                setTimeout(goodCard, 1000);


            } else {
                console.log("onjuist");
                temporaryCards = [];
                console.log(temporaryCards);
                setTimeout(wrongCard, 1000);

            }
        }s

        function wrongCard() {
            $(".temporary").addClass("wrong").removeClass("temporary").effect("shake"); //shake
        }

        function goodCard() {
            $(".temporary").removeClass("temporary").addClass("good").effect("explode"); //shake
        }

        //reload page to restart game
        $(".bx-reset").on("click", function () {
            document.location.reload();
        })

    }

    memoryGame();

});