let clickedCard = null;



function onCardClicked(e) {
  const target = e.currentTarget;
  if (target === clickedCard || target.className.includes('done')) {
    return
  }
  target.className = target.className.replace('color-hidden', '').trim();
  target.className += ' done';

  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {
    if (clickedCard.getAttribute('data-color') === target.getAttribute('data-color')) {
      console.log('card ARE equal')
    } else {
      console.log('card not equal')
      setTimeout(() => {
        target.className = target.className.replace('done', '').trim() + ' color-hidden';
        clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden';
        clickedCard = null;
      }, 500);
    }
  }
}
