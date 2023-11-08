import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

const { delay, step, amount } = form.elements;

function handleSubmit(evt) {
  evt.preventDefault();

  let delayNum = Number(delay.value);
  const amountNum = Number(amount.value);
  const stepNum = Number(step.value);

  if (amountNum <= 0) {
    console.log(`❌ Bad amount. Try amount under 0`);
    iziToast.error({
      theme: 'red',
      position: 'topRight',
      message: `Bad amount. Try amount under 0`,
    });
    return;
  }

  for (let i = 1; i <= amountNum; i += 1) {
    createPromise(i, delayNum)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        iziToast.success({
          theme: 'green',
          position: 'topRight',
          message: `Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        iziToast.error({
          theme: 'red',
          position: 'topRight',
          message: `Rejected promise ${position} in ${delay}ms`,
        });
      });
    delayNum += stepNum;
  }

  form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
