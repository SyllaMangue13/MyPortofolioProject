var aText = new Array(
    " Ingenieur informaticien et passionné ", 
     "de la programmation web. J’ai eu à  ",
     "participer à réalisation de la plus part",
     "des projets académiques telsque :",
     "- la réalisation d’un site de gestion ",
     " des conférences,",
     "- un site de reservation de billets d’avions ,  ",
     "- Application iOS pour la prévision de la metéo ,  ",
     "- la réalisation d’un mini projet  arduino  ",
     "pour la souris 3D. ",
     );
     var iSpeed = 100; // time delay of print out
     var iIndex = 0; // start printing array at this posision
     var iArrLength = aText[0].length; // the length of the text array
     var iScrollAt = 20; // start scrolling up at this many lines
      
     var iTextPos = 0; // initialise text position
     var sContents = ''; // initialise contents variable
     var iRow; // initialise current row
      
     function typewriter()
     {
     
      sContents =  ' ';
      iRow = Math.max(0, iIndex-iScrollAt);
      var destination = document.getElementById("typedtext");
      
      while ( iRow < iIndex ) {
       sContents += aText[iRow++] + '<br />';
      }
      destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
      if ( iTextPos++ == iArrLength ) {
       iTextPos = 0;
       iIndex++;
       if ( iIndex != aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout("typewriter()", 500);
       }
      } else {
       setTimeout("typewriter()", iSpeed);
      }
     }
     
     
     typewriter();
 
     // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

     