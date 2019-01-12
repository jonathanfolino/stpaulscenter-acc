$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
    });

    //get all of the primary menu links
    var primaryMenuLinks = $(".primary-menu-item");

    //get all the divs with the navOption class ClassName {
    var navOptions = $("navOption");

    //get all of the secondary links
    var secondaryMenuLinks = $(".secondary-menu-item");

    //get the container that holds all the navbar options
    var linkContainer = $(".linkContainer");

    //get the hamburger
    var hamburger = $(".hamburger");

    //function used to control the navbar display
    function navbarDisplayControl(icon, container, links){
        if($("body").width() < 860){
            //hamburger is not visible
            if (!$(icon).hasClass("unhide")){
                $(icon).addClass("unhide");
                $(container).addClass("newMenuPosition");
                links.each(function(){
                    $(this).addClass("newMenuWidth");
                });
            }
        }

        else {
            //if hamburger is visible the hide it
            if ($(icon).hasClass("unhide")){
                $(icon).removeClass("unhide");
                //if the primary menu is visible under the hamburger then slide it off screen
                if ($(container).hasClass("slideLeft")){
                    $(container).removeClass("slideLeft");
                }
                // if ($(container).hasClass("newMenuPosition")){
                $(container).removeClass("newMenuPosition");
                links.each(function(){
                    $(this).removeClass("newMenuWidth");
                });
            }
        }
    }

    //call the function when the window is initally loaded
    navbarDisplayControl(hamburger, linkContainer, primaryMenuLinks);

    //control navbar display on window resizing
    $(window).resize(function(){
        navbarDisplayControl(hamburger, linkContainer, primaryMenuLinks);
    });

    //enable all of the links in the navbar to scroll to the targeted section of the page
    secondaryMenuLinks.map(function(){
        $(this).on("click", function(){
            //get the target of each link
            var id = $(this).children().attr("href");
            //if the secondary link clicked is on another page
            if ($(id).length == 0){
                var newLink = $(this).parent().prev().children().attr("href");
                $(this).children().attr("href", newLink + id);
            }
            //secondary link clicked is on the same page
            else{
                //scroll to the target
                //animation taken and adapted from http://stackoverflow.com/questions/6677035/jquery-scroll-to-element
                $("html, body").animate({scrollTop: $(id).offset().top}, 1500);
            }
        });
    });

    //control what happens when hamburger is clicked
    $(hamburger).on("click", function(){
        //if the priamry menu is open
        if ($(linkContainer).hasClass("slideLeft")){
            $(linkContainer).removeClass("slideLeft");
        }
        //if the primary menu is closed
        else {
            $(linkContainer).addClass("slideLeft");
        }
    });

    //control the display of the email popup
    var popupDisplay = false;
    setTimeout(function(){
        $("html").mouseleave(function(){
            if (popupDisplay == false){
                popupDisplay = true;
                $(".popupRequest").addClass("unhide");
                $(".popupBackground").fadeTo(500, .9);
                $(".popupContent").fadeTo(500, 1.0);
                $(".closePopup").on("click", function(){
                    $(".popupRequest").removeClass("unhide");
                });
            }
        });
    }, 5000);

    // Blog
    $('.blogPostsLink').click(function(e){
        if(!$(this).hasClass("selected")){
            e.preventDefault();
            $('.articlePostContainer').fadeOut('fast', function(){
                $('.blogPostContainer').fadeIn('fast');
            });
            $('.blogArticlesLink').toggleClass("selected");
            $(this).toggleClass("selected");
        }
    });

    $('.blogArticlesLink').click(function(e){
        if(!$(this).hasClass("selected")){
            e.preventDefault();
            $('.blogPostContainer').fadeOut('fast', function(){
                $('.articlePostContainer').fadeIn('fast');
            });
            $('.blogPostsLink').toggleClass("selected");
            $(this).toggleClass("selected");

        }
    });
});
