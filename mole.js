let score = 0;
let molesLeft = 100;
let popupLength = 1500;
let hideTimeout;
let clickable = false;

function popUpRandomMole() {
  if (molesLeft <= 0) {
    document.querySelector('.sb__game-over').classList.remove('sb__game-over--hidden');
    return;
  }

  const moleHeads = document.querySelectorAll('.alien');
  moleHeads.forEach(moleHead => moleHead.classList.add('alien-hidden'));


  if (moleHeads.length === 0) {
    return;
  }
  const moleIndex = Math.floor(Math.random() * moleHeads.length);
  const moleHead = moleHeads[moleIndex];
  moleHead.classList.remove('alien-hidden');

  clickable = true;
  molesLeft -= 1;
  document.querySelector('.sb__moles').innerHTML = molesLeft;

  hideTimeout = setTimeout(() => hideMole(moleHead), popupLength);
}


function hideMole(mole) {
  clickable = false;
  mole.classList.add('alien-hidden');

  setTimeout(popUpRandomMole, 100);
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(popUpRandomMole, 100);

  const moleHeads = document.querySelectorAll('.alien1');
  for (let moleHead of moleHeads) {
    moleHead.classList.add('alien-hidden');
    moleHead.addEventListener('click', event => {
      if (!clickable) return;

      score += 1;
      document.querySelector('.sb__score').innerHTML = score;
      popupLength -= popupLength / 10;

      clearTimeout(hideTimeout);
      hideMole(event.target);

      // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED
      event.target.classList.add('alien-hidden');

      // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED FOR THE BONUS
      // event.target.classList.add('mole-head--whacked');
    });
  }
});

// function popUpRandomMole() {
//   if (molesLeft <= 0) {
//     document.querySelector('.sb__game-over').classList.remove('sb__game-over--hidden');
//     return;
//   }

//   const moleHeads = document.querySelectorAll('.alien2');
//   moleHeads.forEach(moleHead => moleHead.classList.add('alien-hidden'));


//   if (moleHeads.length === 0) {
//     return;
//   }
//   const moleIndex = Math.floor(Math.random() * moleHeads.length);
//   const moleHead = moleHeads[moleIndex];
//   moleHead.classList.remove('alien-hidden');

//   clickable = true;
//   molesLeft -= 1;
//   document.querySelector('.sb__moles').innerHTML = molesLeft;

//   hideTimeout = setTimeout(() => hideMole(moleHead), popupLength);
// }


// function hideMole(mole) {
//   clickable = false;
//   mole.classList.add('alien-hidden');

//   setTimeout(popUpRandomMole, 100);
// }

// window.addEventListener('DOMContentLoaded', () => {
//   setTimeout(popUpRandomMole, 100);

//   const moleHeads = document.querySelectorAll('.alien2');
//   for (let moleHead of moleHeads) {
//     moleHead.classList.add('alien-hidden');
//     moleHead.addEventListener('click', event => {
//       if (!clickable) return;

//       score += 1;
//       document.querySelector('.sb__score').innerHTML = score;
//       popupLength -= popupLength / 10;

//       clearTimeout(hideTimeout);
//       hideMole(event.target);

//       // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED
//       event.target.classList.add('alien-hidden');

//       // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED FOR THE BONUS
//       // event.target.classList.add('mole-head--whacked');
//     });
//   }
// });

// function popUpRandomMole() {
//   if (molesLeft <= 0) {
//     document.querySelector('.sb__game-over').classList.remove('sb__game-over--hidden');
//     return;
//   }

//   const moleHeads = document.querySelectorAll('.alien3');
//   moleHeads.forEach(moleHead => moleHead.classList.add('alien-hidden'));


//   if (moleHeads.length === 0) {
//     return;
//   }
//   const moleIndex = Math.floor(Math.random() * moleHeads.length);
//   const moleHead = moleHeads[moleIndex];
//   moleHead.classList.remove('alien-hidden');

//   clickable = true;
//   molesLeft -= 1;
//   document.querySelector('.sb__moles').innerHTML = molesLeft;

//   hideTimeout = setTimeout(() => hideMole(moleHead), popupLength);
// }


// function hideMole(mole) {
//   clickable = false;
//   mole.classList.add('alien-hidden');

//   setTimeout(popUpRandomMole, 100);
// }

// window.addEventListener('DOMContentLoaded', () => {
//   setTimeout(popUpRandomMole, 100);

//   const moleHeads = document.querySelectorAll('.alien3');
//   for (let moleHead of moleHeads) {
//     moleHead.classList.add('alien-hidden');
//     moleHead.addEventListener('click', event => {
//       if (!clickable) return;

//       score += 1;
//       document.querySelector('.sb__score').innerHTML = score;
//       popupLength -= popupLength / 10;

//       clearTimeout(hideTimeout);
//       hideMole(event.target);

//       // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED
//       event.target.classList.add('alien-hidden');

//       // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED FOR THE BONUS
//       // event.target.classList.add('mole-head--whacked');
//     });
//   }
// });

// window.addEventListener('DOMContentLoaded', () => {

//   setInterval(() => {
//     const moleHeads = document.querySelectorAll('.mole-head');
//     for (let moleHead of moleHeads) {
//       moleHead.classList.toggle('mole-head--hidden');
//     }
//   }, 1500);

// });
