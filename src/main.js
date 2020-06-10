let clickedCard = null;
let preventClick = false;
let combosFound = 0;

const colors = [
  'blue', 'red', 'orange', 'yellow', 'gray', 'green', 'purple',
  'darkcyan', 'gold', 'black', 'brown', 'magenta', 'pink', 'silver',
  'beige', 'lime', 'chocolate', 'darksalmon', 'darkviolet',
  'deeppink', 'greenyellow', 'indianred', 'indigo',
  'navy', 'lightslategray',
]

const cards = [...document.querySelectorAll('.card')];
for (let color of colors) {
  const cardAindex = parseInt(Math.random() * cards.length);
  const cardA = cards[cardAindex]
  cards.splice(cardAindex, 1);
  cardA.className += ` ${color}`
  cardA.setAttribute('data-color', color);

  const cardBindex = parseInt(Math.random() * cards.length);
  const cardB = cards[cardBindex]
  cards.splice(cardBindex, 1);
  cardB.className += ` ${color}`
  cardB.setAttribute('data-color', color);
}

function onCardClicked(e) {
  const target = e.currentTarget;
  if (preventClick || target === clickedCard || target.className.includes('done')) {
    return
  }
  target.className = target.className.replace('color-hidden', '').trim();
  target.className += ' done';

  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {
    preventClick = true;
    if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) {
      console.log('card not equal')
      setTimeout(() => {
        target.className = target.className.replace('done', '').trim() + ' color-hidden';
        clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden';
        clickedCard = null;
      }, 500);
    } else {
      combosFound++;
      clickedCard = null;
      if (combosFound === 8) {
        alert('END OF THE GAME');
      }
    }
  }
  preventClick = false;
}
