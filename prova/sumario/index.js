const summaryBox = document.querySelector(".summary-box");

window.addEventListener("DOMContentLoaded", () => {
  showBoxes();
});

function showBoxes() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      let displaySumary = data.map((item) => {
        return `<div class="summary-box ${item.box}">
         <article class="summary-info">
           <img src=${item.icon} alt="">
           <p>${item.category}</p>
         </article>
         <h5 class="summary-calc"><span>${item.score}</span>/ 100</h5>
       </div>`;
      });
      displaySumary = displaySumary.join("");
      //console.log(displaySumary);
      summaryBox.innerHTML = displaySumary;
    })
    .catch((err) => console.log(err));
}
