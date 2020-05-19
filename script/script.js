'use strict';

// Обработчик который отслеживает загрузку контента HTML
document.addEventListener('DOMContentLoaded', () => {
  const btnOpenModal = document.querySelector('#btnOpenModal'),
    modalWrap = document.querySelector('.modal'),
    modalBlock = document.querySelector('#modalBlock'),
    closeModal = document.querySelector('#closeModal'),
    questionTitle = document.querySelector('#question'),
    formAnswers = document.querySelector('#formAnswers'),
    burgerBtn = document.getElementById('burger'),
    nextButton = document.getElementById('next'),
    prevButton = document.getElementById('prev'),
    sendButton = document.getElementById('send'),
    modalDialog = document.querySelector('.modal-dialog'),
    modalTitle = document.querySelector('.modal-title');

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBSR9TRUwB9q7aZZpUv-F7A_E4mP3mKspo",
    authDomain: "burger-quiz-22ce8.firebaseapp.com",
    databaseURL: "https://burger-quiz-22ce8.firebaseio.com",
    projectId: "burger-quiz-22ce8",
    storageBucket: "burger-quiz-22ce8.appspot.com",
    messagingSenderId: "657537253325",
    appId: "1:657537253325:web:848c8e9ff7e92ba756ce84",
    measurementId: "G-C1J3LS26HV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const questions = {
    question: 'Какого цвета бургер вы хотите?',
    answers: [
      {
        title: 'Стандарт',
        url: './image/burger.png'
      },
      {
        title: 'Чёрный',
        url: './image/burgerBlack.png'
      }
    ]
  };

  let clientWidth = document.documentElement.clientWidth;

  const showBurger = () => {
    if (clientWidth < 768) {
      burgerBtn.style.display = 'flex';
    } else {
      burgerBtn.style.display = 'none';
    }
  }

  showBurger();

  window.addEventListener('resize', () => {
    clientWidth = document.documentElement.clientWidth;

    showBurger();
  });

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    modalBlock.classList.add('d-block');
    playTest();
  });

  btnOpenModal.addEventListener('click', () => {
    modalBlock.classList.add('d-block');
    playTest();
  });

  closeModal.addEventListener('click', () => {
    modalBlock.classList.remove('d-block');
    burgerBtn.classList.remove('active');
  });

  modalWrap.addEventListener('click', (e) => {
    if (!e.target.querySelector('.modal-dialog')) return;
    modalBlock.classList.remove('d-block');
    burgerBtn.classList.remove('active');
  });

  const playTest = () => {
    const renderQuestions = () => {
      const burgerName = 'Стандарт';
      const burgerImageSrc = './image/burger.png';

      questionTitle.textContent = questions.question;
      formAnswers.innerHTML = `
        <div class="answers-item d-flex flex-column">
          <input type="radio" id="answerItem1" name="answer" class="d-none">
          <label for="answerItem1" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src="${questions.answers[0].url}" alt="burger">
            <span>${questions.answers[0].title}</span>
          </label>
        </div>
      `;
    };

    renderQuestions();
  };

  const renderQuestions = (indexQuestion) => {
    formAnswers.innerHTML = '';
    questionTitle.textContent = `${questions[indexQuestion].question}`;
    renderAnswers(indexQuestion);
  }

  nextButton.onclick = () => {
    numberQuestion++;
    renderQuestions(numberQuestion);
  };

  prevButton.onclick = () => {
    numberQuestion--;
    renderQuestions(numberQuestion);
  };
})


