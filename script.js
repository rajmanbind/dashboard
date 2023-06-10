const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");
const lists = document.getElementsByClassName("list");
const updation_ui = document.getElementById("update_ui");
for (element of lists) {
  element.addEventListener("dragstart", function (e) {
    let selected = e.target;
    rightBox.addEventListener("dragover", function (e) {
      rightBox.classList.add("hovering");
      e.preventDefault();
    });

    rightBox.addEventListener("dragleave", function () {
      rightBox.classList.remove("hovering");
    });
    rightBox.addEventListener("drop", function () {
      rightBox.classList.remove("hovering");
      rightBox.appendChild(selected);
      selected = null;

      updation_ui.classList.add("display");
      setTimeout(() => {
        updation_ui.classList.remove("display");
      }, 1000);
    });
  });
}
function resetFunction() {
  location.reload();
}
