
var dropdown = document.getElementById("dropdown");
var web_btn = document.getElementById("web_btn")

// function dropdown_btn() {
//     dropdown.classList.toggle("show");
// }

$(document).ready(function() {

    $("#web_btn").click(function(){
      $("#dropdown").fadeIn(1000);
      $("#web_btn").addClass("disabled");
      testFunction();
    });

});


function testFunction() {
    if (web_btn.classList.contains("disabled")){
        // closeMenu(); 
    }
}

// $(function() {
    $(document).on('click', function(link) {
        if (link.target.id != 'web_btn') {
                $("#dropdown").fadeOut(1000);
                $("#web_btn").removeClass("disabled");
            }
        })
// });