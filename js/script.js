$("#add").click(function() {
    var x = $("#tb-1").val();
    var y = $("#tb-2").val();

    var total = parseInt(x) + parseInt(y);
    $("#sum").html("<h2>" + total + "</h2>");
})

$("#sub").click(function() {
    var x = $("#tb-1").val();
    var y = $("#tb-2").val();

    var sub = parseInt(x) - parseInt(y);
    alert("Substraction: " + sub);
})

$("#clear").click(function() {
    $("#tb-1").val("");
    $("#tb-2").val("");
    $("#sum").html("<h2>" + "__________" + "</h2>");
})
