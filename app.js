function addTask() {
    // Créer un élément
    let task = `<li class="list-group-item">${$("input").val()}</li>`;
    $("ul").append(task);
    $("input").val("");
}

$("button").on("click", function () {
    addTask();
});