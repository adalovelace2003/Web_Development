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

const tabs = [{ url: "http://google.com/" }];

tabBtn.addEventListener("click", function () {
  // console.log(window.location.href);
  //OR
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
  });
  
  console.log(tabs[0]);
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    removeP();
    setTimeout(() => {
      myLeads.push(inputEl.value);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));

      // if (inputEl.value) {
      //   if (!myLeads.includes(inputEl.value)) {
      //     myLeads.push(inputEl.value);
      //     console.log("Add Successful");
      //     validationMessage("success");
      //   } else {
      //     console.log("Duplicate Item");
      //     validationMessage("error");
      //   }
      // }

      inputEl.value = "";
      render(myLeads);
    }, 300);
  } else {
    console.log("Blank Input Error");
  }
});

deleteBtn.addEventListener("dblclick", function () {
  console.log("double clicked ");
  localStorage.clear();
  myLeads = [];
  // ulEl.innerHTML = "";
  // leadsFromLocalStorage = ""
  // OR use above two lines or this single line below
  render(myLeads);
});

function render(leads) {
  let style =
    "cursor-pointer w-min underline text-purple-700 font-normal text-lg hover:scale-125";
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
  errorEl.className = "font-";
  errorEl.innerHTML =
    status === "success"
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
