$("#add").click(() => {
    let listVal = $("input").val();
    $("section").append(`<div id="line"><p id="item">${listVal}</p>
        <button class="imgcont" id="cross"><img src="check_mark_ok-512.png" alt=""></button>
        <button class="imgcont" id="delete"><img src="Trash-512.png" alt=""></button></div>`);
    $("input").val("");
    $("#line").on("click", "#delete", (event) => {
        $("#item").text("This button was clicked");
      });
});

// $("#line").on( "click", "#cross", function() {
//         $("p").css("background-color", "red");
// });


// $(this).css("text-decoration", "line-through");

