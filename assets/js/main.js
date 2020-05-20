// Website Button

$(document).ready(function() {
    $("#web_btn").click(function(){
      $("#dropdown_bjj").fadeIn(1000);
      $("#web_btn").addClass("disabled");
    });
});


$(document).on('click', function(link) {
    if (link.target.id != 'web_btn') {
        $("#dropdown_bjj").fadeOut(1000);
        $("#web_btn").removeClass("disabled");
    }
});

// Project Button

$(document).ready(function() {
    $("#proj_btn").click(function(){
        console.log("Hello");
      $("#dropdown_proj").fadeIn(1000);
      $("#proj_btn").addClass("disabled");
    });
});


$(document).on('click', function(link) {
    if (link.target.id != 'proj_btn') {
        $("#dropdown_proj").fadeOut(1000);
        $("#proj_btn").removeClass("disabled");
    }
});