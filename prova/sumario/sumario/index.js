const data = [
    {
        category: "Reaction",
        score: 80,
        icon: "./assets/images/icon-reaction.svg",
        box:"box-reaction"
    },
    {
        category: "Memory",
        score: 92,
        icon: "./assets/images/icon-memory.svg",
        box:"box-memory"
    },
    {
        category: "Verbal",
        score: 61,
        icon: "./assets/images/icon-verbal.svg",
        box:"box-verbal"
    },
    {
        category: "Visual",
        score: 72,
        icon: "./assets/images/icon-visual.svg",
        box:"box-visual"
    },
];

const summarybox = document.querySelector('.summary-box')

window.addEventListener('DOMContentLoaded', ()=>{
    let displaysummary = data.map( (item)=>{
        return `<div class="summary-box ${item.box}">
        <article class="summary-info">
          <img src=${item.icon} alt="">
          <p>${item.category}</p>
        </article>
        <h5 class="summary-calc"><span>${item.score}</span> / 100</h5>
      </div>`
    })
    displaysummary = displaysummary.join("")
    console.log(displaysummary)

    summarybox.innerHTML = displaysummary
})