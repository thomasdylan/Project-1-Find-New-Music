var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "865d7325ecmshf0a5dcd3da7a815p1672a1jsn663835f71fe6"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

//Variable to hold recently searched
var recentlySearched = [];

//Button Click for recently searched buttons
$(document).on('click', '#topic-buttons', function() {
    $('#definition-view').empty();

    ///PLACEHOLDERS
var thisSearch = $(this).attr('PLACEHOLDER');
var queryURL = 'PLACEHOLDER' + thisSearch + 'PLACEHOLDER'

//AJAX GET
$.ajax({
    url: queryURL,
    method: 'GET'
})
});