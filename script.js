const numberInput = document.getElementById('numberInput');
const predictButton = document.getElementById('predictButton');
const predictionResult = document.getElementById('predictionResult');

predictButton.addEventListener('click', () => {
  const number = numberInput.value;

  if (number.length !== 5 || isNaN(number)) {
    predictionResult.textContent = 'Please enter a valid 5-digit number.';
    predictionResult.classList.add('error');
    numberInput.classList.add('invalid');
    return;
  }

  numberInput.classList.remove('invalid');
  predictionResult.classList.remove('error');

  const numberValue = parseInt(number);
  const isDivisibleBy3 = numberValue % 3 === 0;
  const predictionText = isDivisibleBy3 ? 'BIG' : 'SMALL';

  predictionResult.textContent = predictionText;
  predictionResult.classList.remove('visible');
  
  // Add a slight delay to allow for class removal
  setTimeout(() => {
    predictionResult.classList.add('visible');
  }, 10);

  // Add animation effect
  predictionResult.style.opacity = 0;
  setTimeout(() => {
    predictionResult.style.opacity = 1;
  }, 0);
});
