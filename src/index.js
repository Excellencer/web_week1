import "./styles.css";

/* From course video JavaScript 1 */
if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("my-button").addEventListener("click", myNotebook);
  document.getElementById("add-data").addEventListener("click", customText);
}

function myNotebook() {
  console.log("hello world");
  document.getElementById("change").innerHTML = "My Notebook";
}

function customText() {
  let areaText = document.getElementById("custom-text").value;
  document.getElementById("custom-text").value = "";
  let ul = document.getElementById("un-list");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(areaText));
  ul.appendChild(li);
}
