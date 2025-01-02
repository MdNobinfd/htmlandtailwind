// Navber jquery start

$(function() {
    $("#mobile-nav-icon").click(function() {
        $("#mobile-menu").toggle(); 
        $(this).toggleClass("fa-bars fa-times");
    });
});
// Navber jquery end
// Tabs jquery start

$(document).ready(function(){
    $('ul.tabs li').on('click', function(){
        let tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $('#' + tab_id).addClass('current');
    });
});
// Tabs jquery end
// Faq jquery start
$(document).ready(function() {

    $(".faq-title").click(function() {
        var content = $(this).next(".faq-content");
        var arrow = $(this).find(".arrow-icon");

        content.slideToggle();
        
        arrow.toggleClass("rotate-180");
        
        $(this).parent().siblings().find(".faq-content").slideUp();
        $(this).parent().siblings().find(".arrow-icon").removeClass("rotate-180");
    });
});
// Faq jquery end