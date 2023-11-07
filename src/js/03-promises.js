import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
console.log('form: ', form.elements);

form.addEventListener('submit', handleSubmit);

const { delay, step, amount } = form.elements;

function handleSubmit(evt) {
  evt.preventDefault();

  const inputsValue = {
    delay: delay.value,
    step: step.value,
    amount: amount.value,
  };

  console.log('inputValue: ', inputsValue);

  const delayValue = Number(inputsValue.delay);
  const amountValue = Number(inputsValue.amount);
  let stepValue = Number(inputsValue.step);

  for (let i = 1; i <= amountValue; i += 1) {
    const currentDelay =
      i === 1 ? delayValue : delayValue + stepValue * (i - 1);
    setTimeout(() => createPromise(i, currentDelay), currentDelay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    iziToast.success({
      theme: 'green',
      position: 'topRight',
      message: `Fulfilled promise ${position} in ${delay}ms`,
    });
  } else {
    // Reject
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    iziToast.error({
      theme: 'red',
      position: 'topRight',
      message: `Rejected promise ${position} in ${delay}ms`,
    });
  }
}
