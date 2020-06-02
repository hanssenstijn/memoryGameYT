let clickedCard = null;
let preventClick = false;
let combosFound = 0;

let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

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
