//Task 1
$('#main-div').html(`
<button>Hide Button</button>
<button>Show Button</button>
<button>Toggle Button</button>
<button>Show my name Button</button>
    <div></div>
    <div>div 1</div>
    <div>div 2</div>
    <div></div>
`)
// Create a div tag and it should display Welcome message (by using JQuery )
$("#main-div>div:eq(0)").text("Welcome to our website");
// Create two div tags and assign yellow as background colour to both of them by using JQuery.
$("#main-div>div:eq(1)").css("background-color","yellow");
$("#main-div>div:eq(2)").css("background-color","yellow");
// Display and hide message shown in the div tag on click of the buttons.  => You can use Jquery show hide.
$("#main-div>button:eq(0)").click(function () { 
    $("#main-div>div:eq(0)").hide(1000);
}); 
$("#main-div>button:eq(1)").click(function () { 
    $("#main-div>div:eq(0)").show(1000);
}); 
// Display and hide message by using a single button . You can use Jquery toggle().
$("#main-div>button:eq(2)").click(function () { 
    $("#main-div>div:eq(0)").toggle(1000);
}); 
// Create a div tag and on click of a button it should display your name.
$("#main-div>button:eq(3)").click(function () { 
    $("#main-div>div:eq(3)").text("Ali Ahmed Fathi");
}); 
var imagestyle={
    position:"relative",
    'width': "150",
    'height': "100"
}
var rightstyle={
    'left': "+=20px",
}
var leftstyle={
    'left': "-=20px",
}
$('#image-div').html(`
    <input type="button" value="<<   >>"><br><br>
    <img src="./ball.png" class="image-style">
`)
$('.image-style').css(imagestyle)
$('#image-div>input:eq(0)').click(function () {
    $("img").animate(rightstyle,1000).animate(leftstyle,1000);
})
