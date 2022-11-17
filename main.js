let menu = document.querySelector("#open"),
    navigation = document.querySelector(".nav"),
    closee = document.querySelector("#close");

menu.addEventListener('click', () => {
    navigation.style.transform = 'translateY(35%)';
})

closee.addEventListener('click', () => {
    navigation.style.transform = 'translateY(-100%)';
})
function show_hide() {
    var click = document.getElementById("list-items");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
    document.querySelector(".list-items").style.display = "none"
}
function show_hidee() {
    var click = document.querySelector(".list-items");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }

    document.querySelector("#list-items").style.display = "none"
}
