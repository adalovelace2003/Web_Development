let myLeads = ["aa", "bb", "cc"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
  function1();
  function2();
  function3();
});

function function1() {
  console.log("save button clicked ");
}
function function2() {
  myLeads.push(inputEl.value);
}
function function3() {
  for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
    ulEl.textContent += myLeads[i] + "_____________";
  }
}





