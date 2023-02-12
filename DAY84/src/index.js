let myLeads = [];
let oldLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#ul-el");
const tabBtn = document.querySelector("#tab-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  removeP();
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    checkDuplicateAndPush(tabs[0].url);
    render(myLeads);
  });
});

inputBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    removeP();
    setTimeout(() => {

      checkDuplicateAndPush(inputEl.value);
      inputEl.value = "";
      render(myLeads);
    }, 300);
  } else {
    console.log("Blank Input Error");
  }
});

function checkDuplicateAndPush(value) {
  console.log(inputEl.value);
  if (!myLeads.includes(value)) {
    myLeads.push(value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log("Add Successful");
    validationMessage("success");
    console.log(myLeads);
  } else {
    console.log("Duplicate Item");
    validationMessage("error");
    console.log(myLeads);
  }
}

deleteBtn.addEventListener("dblclick", function () {
  console.log("double clicked ");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

function render(leads) {
  let style =
    "cursor-pointer w-min underline text-purple-700 font-normal text-xs hover:text-red-500";
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li class="${style}">
    <a href="${leads[i]}" target="_blank">
     ${leads[i]}
     </a>
     </li>`;
  }
  ulEl.innerHTML = listItems;
}

function validationMessage(status) {
  const errorEl = document.createElement("p");
  errorEl.innerHTML =
    status === "success"
      ? '<p class="text-sm text-green-600">Add Successful</p>'
      : '<p class="text-sm text-red-600">Duplicate</p>';
  deleteBtn.after(errorEl);
}

function removeP() {
  const allParagraphs = document.querySelectorAll("p");
  allParagraphs.forEach(function (p) {
    p.remove();
  });
}
