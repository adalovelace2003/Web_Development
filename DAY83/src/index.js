let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

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
      renderLeads();
    }, 300);
  }
  else
  {
    console.log("Blank Input Error")
  }
});

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  ulEl.innerHTML = "";
  leadsFromLocalStorage = ""
});

function renderLeads() {
  let style = "cursor-pointer w-min underline text-purple-700 font-normal text-lg hover:scale-125";
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li class="${style}">
    <a href="${myLeads[i]}" target="_blank">
     ${myLeads[i]}
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
