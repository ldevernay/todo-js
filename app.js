function addTask() {
    // Créer un élément
    let task = `<li class="list-group-item">${$("input").val()} <i class="fas fa-trash"></i></li>`;
    $("ul").append(task);
    $("input").val("");
}

$("button").on("click", function () {
    addTask();
});

$("input").keypress(function(event){
    if(event.which == 13){
        addTask();
    }
});