// instrunção jQuery  (jQuery é uma biblioteca de funções JavaScript que interage com o HTML)
// instrução para que se inicie o script apenas quando o documento estiver todo carregado
$(document).ready(function() {

    // progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: "#1999bd",
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA'},
        to: {color: '#1999bd'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: "#1999bd",
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA'},
        to: {color: '#1999bd'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: "#1999bd",
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA'},
        to: {color: '#1999bd'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }

    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: "#1999bd",
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA'},
        to: {color: '#1999bd'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5456);

            circle.setText(value);
        }

    });

    // Iniciando o loader quando o usuário chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();
        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1; 

        }

    });

    // Parallax
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

    }, 250);

    // filtro do portfólio

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');
// se tiver a classe do tipo que enviou

        if(type == 'dsg-btn') {
            eachBoxes('dsg', boxes)
        } else if(type == 'dev-btn') {
          eachBoxes('dev', boxes);
        } else if(type == 'seo-btn') {
            eachBoxes('seo', boxes);
        }else {
            eachBoxes('all', boxes);
        }  


    });


    function eachBoxes(type, boxes) {

        if(type =='all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    // esconda a caixinha
                    $(this).fadeOut ('slow');
                } else {
                    // se tiver a class do tipo que enviou, mostre a caixinha
                    $(this).fadeIn();
                }

            });
        }

    }

    // scroll para seções
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {
        
        let btnId= $(this).attr('id');

        console.log(btnId);

        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        }else if(btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if(btnId == 'portfolio-menu') {
            scrollTo = portfolioSection; 
        } else if(btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).stop().animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    });

});