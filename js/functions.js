$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
    });

    //get all of the secondary links
    var secondaryMenuLinks = $(".secondary-menu-item");
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
        e.preventDefault();
        $('.articlePostContainer').fadeOut('fast', function(){
            $('.blogPostContainer').fadeIn('fast');
            });
        });

        $('.blogArticlesLink').click(function(e){
        e.preventDefault();
        $('.blogPostContainer').fadeOut('fast', function(){
            $('.articlePostContainer').fadeIn('fast');
            });
        });
});
