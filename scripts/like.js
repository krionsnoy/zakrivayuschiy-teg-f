// Обе кнопки карточки управляют одним сердцем.
document.querySelectorAll('.card').forEach((card) => {
  const heart = card.querySelector('.like-icon');
  const button = card.querySelector('.card__like-button');
  const iconButton = card.querySelector('.card__icon-button');
  let textTimer;

  function toggleIsLiked() {
    const isLiked = heart.classList.toggle('is-liked');
    button.setAttribute('aria-pressed', String(isLiked));
    iconButton.setAttribute('aria-pressed', String(isLiked));
    iconButton.setAttribute('aria-label', isLiked ? 'Больше не нравится' : 'Нравится');
    // Отменяем предыдущую смену текста при быстрых повторных кликах.
    clearTimeout(textTimer);
    textTimer = setTimeout(() => {
      button.querySelector('.button__text').textContent = isLiked ? 'Unlike' : 'Like';
    }, 500);
  }

  iconButton.addEventListener('click', toggleIsLiked);
  button.addEventListener('click', toggleIsLiked);
});
