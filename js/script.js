/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;

   let studentListElement = document.getElementsByClassName('student-list')[0];
   studentListElement.innerHTML = '';

   for (let i = startIndex; i < endIndex; i++) {
      studentListElement.insertAdjacentHTML("beforeend",
      `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
            <h3>${list[i].name.first+" "+list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
      <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
      </div>
    </li>`
      );

   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   let numButtons = Math.ceil(list.length/9);
   let pageButtons = document.getElementsByClassName('link-list')[0];
   pageButtons.innerHTML = '';
   for (let i = 1; i <= numButtons; i++) {
      pageButtons.insertAdjacentHTML('beforeend',`<li><button type="button">${i}</button></li>`);
   }

   document.querySelector(".link-list > li button").className = "active";

   pageButtons.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
         removeActive();
         e.target.className = "active";
         showPage(list, +e.target.textContent)
      }
   })
}

function removeActive() {
   let buttons = document.querySelectorAll(".link-list button");
   buttons.forEach(button => {
      button.classList.remove("active");
   });
}

// Call functions
showPage(data, 1);
addPagination(data);