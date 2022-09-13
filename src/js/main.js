// Header change on scroll

if ( document.URL.includes("index") ) {
    window.onscroll = function() {
        headerBackground();
        logoChange();
        };
}


// When the user scrolls down 50px from the top of the document, change the header's background color


function headerBackground() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "#231F20";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}

//function to change logo size on scroll

function logoChange(){
    var logo = $(".logo1"); $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    

    
    if (scroll >= 50) {
        if(!logo.hasClass("logo2")) {
          logo.hide();
          logo.removeClass('logo1').addClass("logo2").fadeIn( "slow");
        }
      } else {
        if(!logo.hasClass("logo1")) {
          logo.hide();
          logo.removeClass("logo2").addClass('logo1').fadeIn( "slow");
        }
      }
    });
};

//Search Bar



  /* Set the height of the side navigation to 250px and the left margin of the page content to 250px */
function openSearch() {
    document.getElementById("header-search-container").style.height = "3rem";
    document.getElementById("header-container").style.marginTop = "3rem";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeSearch() {
    document.getElementById("header-search-container").style.height = "0";
    document.getElementById("header-container").style.marginTop = "0";
  }


// Sidenav

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sidebar-nav").style.width = "26rem";
    document.getElementById("main").style.marginLeft = "26rem";
    document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
    window.onscroll = () => { window.scroll(0, 0); };
    

}

 
        
    
  
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("sidebar-nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    
    
  }

  




//Announcement Box

function announcementClose() {
    var x = document.getElementById("announcement-wrapper");
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }




//news card section effects

//news card 1

//mouseOver
function opacityFunction(){
    document.getElementById("overlay1").style.opacity = '1';
}

function zIndexFuction(){
    document.getElementById("news-card-body1").style.zIndex = '1';
}

function linkColorFunction(){
    document.getElementById("news-card-body1").style.color = 'white';
}


//mouseOut

function opacityFunctionR(){
    document.getElementById("overlay1").style.opacity = '0';
}

function zIndexFuctionR(){
    document.getElementById("news-card-body1").style.zIndex = '0';
}

function linkColorFunctionR(){
    document.getElementById("news-card-body1").style.color = 'black';
}

//news card 2

//mouseOver
function opacityFunctionTwo(){
    document.getElementById("overlay2").style.opacity = '1';
}

function zIndexFuctionTwo(){
    document.getElementById("news-card-body2").style.zIndex = '1';
}

function linkColorFunctionTwo(){
    document.getElementById("news-card-body2").style.color = 'white';
}


//mouseOut

function opacityFunctionRTwo(){
    document.getElementById("overlay2").style.opacity = '0';
}

function zIndexFuctionRTwo(){
    document.getElementById("news-card-body2").style.zIndex = '0';
}

function linkColorFunctionRTwo(){
    document.getElementById("news-card-body2").style.color = 'black';
}

//news card 3

//mouseOver
function opacityFunctionThree(){
    document.getElementById("overlay3").style.opacity = '1';
}

function zIndexFuctionThree(){
    document.getElementById("news-card-body3").style.zIndex = '1';
}

function linkColorFunctionThree(){
    document.getElementById("news-card-body3").style.color = 'white';
}


//mouseOut

function opacityFunctionRThree(){
    document.getElementById("overlay3").style.opacity = '0';
}

function zIndexFuctionRThree(){
    document.getElementById("news-card-body3").style.zIndex = '0';
}

function linkColorFunctionRThree(){
    document.getElementById("news-card-body3").style.color = 'black';
}



