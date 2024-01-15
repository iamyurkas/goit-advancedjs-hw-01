import throttle from 'lodash.throttle';

const doc = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

doc.form.addEventListener(
  'input',
  throttle(() => {
    const email = doc.email.value;
    const message = doc.message.value;

    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email,
        message,
      })
    );
  }, 500)
);

window.addEventListener('load', () => {
  const formFields = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formFields) {
    doc.email.value = formFields.email;
    doc.message.value = formFields.message;
  }
});

doc.form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({
    email: doc.email.value,
    message: doc.message.value,
  });

  doc.form.reset();
  localStorage.removeItem('feedback-form-state');
});
