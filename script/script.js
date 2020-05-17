'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const btnOpenModal = document.querySelector('#btnOpenModal');
  const modalWrap = document.querySelector('.modal');
  const modalBlock = document.querySelector('#modalBlock');
  const closeModal = document.querySelector('#closeModal');
  const questionTitle = document.querySelector('#question');
  const formAnswers = document.querySelector('#formAnswers');
  const burgerBtn = document.getElementById('burger');

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

      questionTitle.textContent = 'Какого цвета бургер вы хотите?';
      formAnswers.innerHTML = `
        <div class="answers-item d-flex flex-column">
          <input type="radio" id="answerItem1" name="answer" class="d-none">
          <label for="answerItem1" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src="${burgerImageSrc}" alt="burger">
            <span>${burgerName}</span>
          </label>
        </div>
      `;
    };

    renderQuestions();
  };
})


