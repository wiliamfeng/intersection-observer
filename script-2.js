const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
  }
);


const lastCardObserver = new IntersectionObserver(entries => {
  const lastCard = entries[0];
  if(!lastCard.isIntersecting) return;
  loadNewCards();
  lastCardObserver.unobserve(lastCard.target);
  lastCardObserver.observe(document.querySelector(".card:last-child"))
}, {});

lastCardObserver.observe(document.querySelector(".card:last-child"));

cards.forEach((card) => {
  observer.observe(card);
});

function loadNewCards(){
  for(let i = 0; i < 10; i++){
    const newCard = document.createElement("div");
    newCard.textContent = "New Card";
    newCard.classList.add("card");
    observer.observe(newCard);
    cardContainer.append(newCard)
  }
}


