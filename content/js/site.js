$('.button-collapse').sideNav({
});

$(window).on("load", function () {
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
    $('#dashboardi').lightGallery({
        thumbnail: true,
        selector: 'a'
    });
});

function selectSection(_section){
	var sections={
		inicio : document.getElementById("inicio"),
		experiencia : document.getElementById("experiencia"),
		proyectos : document.getElementById("proyectos"),
        contacto : document.getElementById("contacto")
	};
    var buttons={
        inicio : document.getElementById("inili"),
		experiencia : document.getElementById("expli"),
		proyectos : document.getElementById("proli"),
        contacto : document.getElementById("conli")
    };

	for(section in sections){
		if(section===_section){
			sections[section].classList.add("selected");
            buttons[section].classList.add("active");
		}else{
			sections[section].classList.remove("selected");
            buttons[section].classList.remove("active");
		}
	}

    if($body.width() < 992){
        $('.button-collapse').sideNav('hide');
    }

	return false;
}