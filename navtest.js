//const toggle = document.querySelector(".toggle_btn");
//const toggleIcon = document.querySelector(".toggle_btn i");
//const dropdown = document.querySelector(".drop_down");
//toggle.onclick = function () {
//alert("success");
//dropdown.classList.toggle("open");
//};

function hai() {
  var testing = document.getElementById("drop").style;
  alert("called");
  if (testing == "none;") {
    alert("if 2");
    testing.display = "block;";
  }
}
function hello() {
  if (testing == "display:block;") {
    alert("if 1");
    testing.display = "none;";
  }
}
