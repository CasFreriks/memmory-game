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

            if (!$(this).hasClass("temporary") && temporaryCards.length <= 1) {
                $(this).addClass("temporary");
            }

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

                setTimeout(goodCard, 1000);
            } else {
                $(".temporary").addClass("wrong").effect("shake");
                setTimeout(resetCard, 2000);
            }
        }

        function resetCard() {
            $(".wrong").removeClass("wrong temporary");
            temporaryCards = [];
        }

        function goodCard() {
            $(".temporary").removeClass("temporary").addClass("good").effect("explode");
            temporaryCards = [];
        }

        //reload page to restart game
        $(".bx-reset").on("click", function () {
            document.location.reload();
        })

    }

    memoryGame();

});