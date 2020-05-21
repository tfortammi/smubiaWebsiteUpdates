
// FOR CATEGORY FILTER - TRY TO DYNAMICALLY ADD FILTER
// var cardclasses = ["analytics", "machine-learning", "finance"];

$("#reset-btn").click(function() {
    $(".hide").removeClass("hide");
})

$("#analytics-btn").click(function() {
    $(".hide").removeClass("hide");
    $(".active-filter").removeClass("active-filter");
    $(".card:not(.analytics)").toggleClass("hide");
    $("#analytics-btn").toggleClass("active-filter");
})

$("#machine-learning-btn").click(function() {
    $(".hide").removeClass("hide");
    $(".active-filter").removeClass("active-filter");
    $(".card:not(.machine-learning)").toggleClass("hide");
    $("#machine-learning-btn").toggleClass("active-filter");
})

$("#finance-btn").click(function() {
    $(".hide").removeClass("hide");
    $(".active-filter").removeClass("active-filter");
    $(".card:not(.finance)").toggleClass("hide");
    $("#finance-btn").toggleClass("active-filter");
})


// FOR SEARCH FUNCTION

function search() {

    $(".hide").removeClass("hide");

    var input, filter, cardtitle, cardtext;
    input = $("#search").val();
    filter = input.toUpperCase();
    card = $(".card");
    cardtitle = $(".card-title");
    cardtext = $(".card-text");
    
    for (i=0; i < cardtitle.length; i++) {
        currentCardTitle = cardtitle[i].innerText;
        currentCardText = cardtext[i].innerText;
        currentCard = card[i];

        if (currentCardText.toUpperCase().indexOf(filter) > -1 || currentCardTitle.toUpperCase().indexOf(filter) > -1) {
            console.log(currentCardText.toUpperCase(), filter, currentCardText.toUpperCase().indexOf(filter));
        } else {
            card[i].classList.add("hide");
        }

    }

}