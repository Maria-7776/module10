const btn = document.querySelector('.btn');
const output = document.querySelector('output');
let isFirstIcon = true;

btn.addEventListener('click', () => {
  let screenWidth = window.screen.width;
  let screenHeight = window.screen.height;
  window.alert(`Размер экрана: ${screenWidth} пикселей на ${screenHeight} пикселей`)
  
});

