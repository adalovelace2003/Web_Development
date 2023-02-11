let myLeads = ["aa", "bb", "cc"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
  removeP();
  setTimeout(() => {
    console.log("Validating...");
    if (inputEl.value) {
      if (!myLeads.includes(inputEl.value)) {
        myLeads.push(inputEl.value);
        console.log("Add Successful");
        validationMessage("success");
      } else {
        console.log("Duplicate Item");
        validationMessage("error");
      }
    }
    inputEl.value = "";
    renderLeads();
}, 300);
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li class="list-disc">${myLeads[i]}</li>`;
  }
  ulEl.innerHTML = listItems;
}

function validationMessage(status) {
  const errorEl = document.createElement("p");
  errorEl.className = "text-xl font-bold";
  errorEl.innerHTML = status === "success"
    ? '<p class="text-green-600">Add Successful</p>'
    : '<p class="text-red-600">Error Occurred</p>';
  inputBtn.after(errorEl);
}

function removeP() {
  const allParagraphs = document.querySelectorAll("p");
  allParagraphs.forEach(function (p) {
    p.remove();
  });
}

