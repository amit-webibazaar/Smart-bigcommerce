
    
$(document).ready(function(){

    $(".clickFade ul").hide();
    $(".clickFade").click(function(){
        $(this).children("ul").stop(true,true).fadeToggle("fast"),
        $(this).toggleClass("dropdown-active");
    });

    // Start Winter Infotech 18-12-2020
    $('.winter-review').each(function() {
        if(typeof($(this).children('span').data('review')) !== "undefined") {
            $(this).parent().find('.winter-count').text($(this).children('span').attr('data-review'));
        }
    });
    // End Winter Infotech 18-12-2020
    /* loader */
   var o = $('#page-preloader');
    if (o.length > 0) {
        $(window).on('load', function() {
            $('#page-preloader').removeClass('visible');
        });
    }
    

    // sticky add to cart in product page
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $('.sticky-cart-product').fadeIn();
        } else {
            $('.sticky-cart-product').fadeOut();
        }
    });

    // search
    $(".first").click(function(){
        $(".sec").addClass("newadd");
    });
    
      $(".sec").click(function(){
        $(".first").addClass("newrem");
        $(this).removeClass("newadd");
    });

    $("#gridProduct").click(function(event) {
        $("#gridProduct").addClass("active");
        $("#listProduct").removeClass("active");
        $(".productList").addClass("productGrid");
        $(".productGrid").removeClass("productList");

    });
    $("#listProduct").click(function(event) {
        $("#listProduct").addClass("active");
        $("#gridProduct").removeClass("active");
        $(".productGrid").addClass("productList");
        $(".productList").removeClass("productGrid");
    });

    

     /* sticky header */
if ($(window).width() >= 800) {     
var header = document.querySelector('.header');
    onScroll = () => {
      var scrolledPage = Math.round(window.pageYOffset);
      if(scrolledPage > 400) {
        $('.header-top').addClass('fixed fadeInDown animated mycustom-container');
        document.getElementById("header_placeholder").style.display = "block";
      } else {
        $('.header-top').removeClass('fixed fadeInDown animated mycustom-container');
        document.getElementById("header_placeholder").style.display = "none";
      }
    }
document.addEventListener('scroll', onScroll);
}else{
    var header = document.querySelector('.header');
    onScroll = () => {
      var scrolledPage = Math.round(window.pageYOffset);
      if(scrolledPage > 120) {
        $('.header-top').addClass('fixed fadeInDown animated mycustom-container');
        document.getElementById("header_placeholder").style.display = "block";
      } else {
        $('.header-top').removeClass('fixed fadeInDown animated mycustom-container');
        document.getElementById("header_placeholder").style.display = "none";
      }
    }
    document.addEventListener('scroll', onScroll);
}

if ($(window).width() <= 800) {
    $('.page-sidebar').appendTo('.page-content');
    $('#facetedSearch').appendTo('.xs-filter');
    $('.mygift').appendTo('.user-down');
    $('.theme_automotive .myquick-search').appendTo('.fashion-search');

  }
});

// Compare product js
$(document).ready(function(){
    $('#comparecontent').fadeOut('slow');
    $(".card-figcaption-body .compare").click(function(){
        $('#comparecontent').fadeIn('slow');
        // $("#comparecontent").removeClass("d-none");
        setTimeout(function() {
            $('#comparecontent').fadeOut('slow');
            // $("#comparecontent").addClass("d-none");
        }, 2000);
    });
});
$(document).ready(function(){
    $("body").on("click",".wb-compare",function(){
        var pro_id = $(this).data("compare-id"); 
        var oldUrl = $(".navUser-item .navUser-item--compare").attr('href');
        const compareId = $(this).attr("data-compare-id");
        console.log( $(this).parent() )
        if ($(this).parent().hasClass('is-active') ) {
            $("body .compare-"+compareId).removeClass("is-active");
            $('#product-remove-popup').fadeIn().delay(2500).fadeOut();
            console.log('remove')
        }
        else{
            $("body .compare-"+compareId).addClass("is-active");
            $('#product-add-popup').fadeIn().delay(2500).fadeOut();
            console.log('Add')
        }
        
        if ( $(this).hasClass('active') ) {
            $('#compare-remove-content').fadeIn('slow');
            $(this).removeClass('active');
            var newUrl = oldUrl.replace(pro_id + "/", "");
            $(".navUser-item .navUser-item--compare").attr('href',newUrl);
        }
        else {
            
            $('#compare-remove-content').fadeOut('slow');
            $(this).addClass('active');
            var url_a = $(".navUser-item .navUser-item--compare").attr('href');
            var url_b = url_a.replace(/\/$/, "") + "/" + pro_id + "/";

            $(".navUser-item .navUser-item--compare").attr('href',url_b);
            $(".navUser-item .navUser-item--compare").show();
        }
        setTimeout(function() {
            $('#compare-remove-content').fadeOut('slow');
        }, 2000);
    });

    $('.titleWrapper').click(function(){
        var toggle = $(this).next('div#descwrapper');
        $(toggle).slideToggle("slow");
    });
    $('.inactive').click(function(){
        $(this).toggleClass('inactive active');
    });

});

function openSearch() {
    $('body').addClass("active-search");
    document.getElementById("search").style.height = "auto";
    $('#search').addClass("sideb");
    $('.search_query').attr('autofocus', 'autofocus').focus();
}
function closeSearch() {
    $('body').removeClass("active-search");
    document.getElementById("search").style.height = "0";
    $('#search').addClass("siden");
    $('.search_query').removeAttr('autofocus', 'autofocus').focus();
}

/* responsive menu */

//     function openNav(event) {
//     event.preventDefault(); // Prevent the default anchor behavior
//     $('body').addClass("active");
//     document.getElementById("mySidenav").style.transform = "translate(0%)";
// }

// function closeNav() {
//     $('body').removeClass("active");
//     document.getElementById("mySidenav").style.transform = "translate(-100%)";
// }

/* responsive menu */

function closecart() {
  document.getElementById("cart-preview-dropdown").style.transform = "translate(100%)";
}

// Dropdown in Dropdown js
$(document).ready(function () {
    $('.mycurrency .navUser-action').on("click", function(e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
    });

    // announcement close button js
    $("#closeButton").on("click", function (t) {
        $("#header_banner").slideToggle("slow");
    });
});
