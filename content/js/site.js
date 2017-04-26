$('.button-collapse').sideNav();

$(document).ready(function () {
    var movementStrength = 15;
    var height = movementStrength / $(".user-info").height();
    var width = movementStrength / $(".user-info").width();
    $(".user-info").mousemove(function (e) {
        // var pageX = e.pageX - ($(".user-info").width() / 2);
        // var pageY = e.pageY - ($(".user-info").height() / 2);
        // var newvalueX = width * pageX / -1 - 5;
        // var newvalueY = height * pageY / -1 - 5;
        // $('.user-info').css("background-position", newvalueX + "px     " + newvalueY + "px");
        var pageY = e.pageY - ($(".user-info").height() / 2);
        var newvalueY = height * pageY / -1 - 5;
        $('.user-info').css("background-position", width + "px     " + newvalueY + "px");
    });

    document.addEventListener('scroll', function (e) {
        var pageY = e.pageY - ($(".user-info").height() / 2);
        var newvalueY = height * pageY / -1 - 10;
        $('.user-info').css("background-position", width + "px     " + newvalueY + "px");
    });

    setTimeout(function () {
        $('.page-loader-wrapper').fadeOut();
    }, 5);

    $('#samu').lightGallery({
        thumbnail: true,
        selector: 'a'
    });
});