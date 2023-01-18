//Task 2
var addBtn={
    backgroundColor:"#5cb85c",
    padding:25,
    marginRight:"10vw",
    border:0,
    color:"white",
    borderRadius:"5px",
    fontSize: "2em"
}
var diffBtn={
    backgroundColor:"#d9534f",
    padding:25,
    marginRight:"10vw",
    border:0,
    color:"white",
    borderRadius:"5px",
    fontSize: "2em"
}
var multBtn={
    backgroundColor:"#f0ad4e",
    padding:25,
    marginRight:"10vw",
    border:0,
    color:"white",
    borderRadius:"5px",
    fontSize: "2em"
}
var dividBtn={
    backgroundColor:"#5bc0de",
    padding:25,
    marginRight:"10vw",
    border:0,
    color:"white",
    borderRadius:"5px",
    fontSize: "2em"
}
var hoverBtn={
    opacity:0.5,
    color:"#5bc0de",
}
var leftstyle={
    'width': "150",
    'height': "100"
}
var rightstyle={
    'width': "150",
    'height': "100"
}
// var firstnumber = document.getElementById('firstInput').value;
//console.log(firstnumber);
$('#addBtn').css(addBtn);
$('#diffBtn').css(diffBtn)
$('#multBtn').css(multBtn)
$('#dividBtn').css(dividBtn)
$('#addBtn').click(function () { 
    var input1 = $("#firstInput").val();
    var input2 = $("#secondInput").val();
    var result = parseInt(input1) + parseInt(input2);
    $('#myvalue').text(result);
});
$('#diffBtn').click(function () { 
    var input1 = $("#firstInput").val();
    var input2 = $("#secondInput").val();
    var result = parseInt(input1) - parseInt(input2);
    $('#myvalue').text(result);
});
$('#multBtn').click(function () {
    var input1 = $("#firstInput").val();
    var input2 = $("#secondInput").val(); 
    var result = parseInt(input1) * parseInt(input2);
    $('#myvalue').text(result);
});
$('#dividBtn').click(function () { 
    var input1 = $("#firstInput").val();
    var input2 = $("#secondInput").val();
    var result = parseInt(input1) / parseInt(input2);
    $('#myvalue').text(result.toFixed(2));
});