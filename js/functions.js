$(document).ready(function(){
    var secondaryMenuLinks = $(".secondary-menu-item");
  //enable all of the links in the navbar to scroll to the targeted section of the page
  secondaryMenuLinks.map(function(){
    $(this).on("click", function(){
      //get the target of each link
      var id = $(this).children().attr("href");
      //scroll to the target
      //animation taken and adapted from http://stackoverflow.com/questions/6677035/jquery-scroll-to-element
      $("html, body").animate({scrollTop: $(id).offset().top}, 1500);
    });
  });



});
