// const myBtnEl = document.querySelector('.my-button');
// const myTextEl = document.querySelector('.my-text');

// function swapSomeText() {
//   myTextEl.textContent = myBtnEl.getAttribute('data-whatever');
// }

// // myBtnEl.addEventListener('click', swapSomeText);
// $(document).ready(function () {
//    $(function () {
//      $('[data-toggle="tooltip"]').tooltip();
//    });
// });
const roll = 5;
if (roll === 1 || roll === 6) {
  console.log('You win!');
} else if (roll <= 3) {
  console.log('Roll again!');
} else {
  console.log('looks like both of the above conditions were false')
}