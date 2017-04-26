$('.button-collapse').sideNav();

$(window).on("load", function() {
    setTimeout(function () {
        $('.page-loader-wrapper').fadeOut();
    }, 10);
});

$(document).ready(function () {
    var movementStrength = 15;
    var height = movementStrength / $(".user-info").height();
    var width = movementStrength / $(".user-info").width();
    $(".user-info").mousemove(function (e) {
        var pageY = e.pageY - ($(".user-info").height() / 2);
        var newvalueY = height * pageY / -1 - 5;
        $('.user-info').css("background-position", width + "px     " + newvalueY + "px");
    });

    document.addEventListener('scroll', function (e) {
        var pageY = e.pageY - ($(".user-info").height() / 2);
        var newvalueY = height * pageY / -1 - 10;
        $('.user-info').css("background-position", width + "px     " + newvalueY + "px");
    });

    $('#samu').lightGallery({
        thumbnail: true,
        selector: 'a'
    });
    $('#aurai').lightGallery({
        thumbnail: true,
        selector: 'a'
    });
});