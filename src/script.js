
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
