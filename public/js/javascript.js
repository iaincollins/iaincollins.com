$(function() {
    var title = $('.navbar h1 .title').text();
    $('.navbar h1 .title').html('').removeClass('hide');
    var displayText = setInterval(function() {
        var currentLength = $('.navbar h1 .title').text().length;
        if (currentLength == title.length) {
            clearInterval(displayText);
        } else {
            $('.navbar h1 .title').text( title.substr(0, currentLength + 1) );
        }
    }, 100);
});