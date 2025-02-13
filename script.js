document.getElementById("toggleIcon").addEventListener("click", function () {
  var menu = document.getElementById("menu__wrapper");
  if (menu__wrapper.style.display === "block") {
    menu__wrapper.style.display = "none";
  } else {
    menu__wrapper.style.display = "block";
  }
});
