$(document).ready(function() {
    $("#iconToggle").click(function() {
        var icon = $("#iconToggle a i");
        if (icon.hasClass("fa-sun")) {
            console.log('Tema claro')
            icon.removeClass("fa-sun").addClass("fa-moon");
            $(".navbar").removeClass("navbar-dark").addClass("navbar-light"); // Altera para o tema claro
            $(".navbar").removeClass("bg-light").addClass("bg-dark");
            $(".navbar-brand").css("color", "white")
            $(".tema").css("color", "white !important")
            
        } else {
            console.log('Tema escuro');
            icon.removeClass("fa-moon").addClass("fa-sun");
            $(".navbar").removeClass("navbar-light").addClass("navbar-dark"); // Altera para o tema escuro
            $(".navbar").removeClass("bg-dark").addClass("bg-light");
            $(".navbar-brand").css("color", "black")
            $(".tema").css("color", "black !important")

        }
    });
});