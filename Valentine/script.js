const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Update the position when the button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yey I love youuuu! 😘";
  
  // Change the position of the gif
  gif.style.position = 'relative';
  gif.style.top = '-80px';  // Adjust the top position as needed
  gif.style.left = '-70px'; // Adjust the left position as needed
  
  // Change the source of the gif
  gif.src = "https://media.tenor.com/ir-_bntmpAgAAAAi/cocopry-stich.gif";

    // Vanish the buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
