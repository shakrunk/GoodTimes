window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbarBig").style.padding = "6px 6px";
    document.getElementById("navbarBig").style.backgroundColor= "rgba(0,0,0,1)";
    document.getElementById("navbarSmall").style.padding = "6px 6px";
    document.getElementById("navbarSmall").style.backgroundColor= "rgba(0,0,0,1)";
    document.getElementById("logo").style.fontSize = "20px";
    document.getElementById("arrow").style.color = "rgba(0,0,0,0)";
  } else {
    document.getElementById("navbarBig").style.padding = "20px 10px";
    document.getElementById("navbarBig").style.backgroundColor= "rgba(0,0,0,0)";
    document.getElementById("navbarSmall").style.padding = "20px 10px";
    document.getElementById("navbarSmall").style.backgroundColor= "rgba(0,0,0,0)";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("arrow").style.color = "white";
  }
}

function open_sidebar() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}