const clock = document.querySelector('.items');
const date = document.querySelector('.date')

const tick = () => {
  // Uhrzeit
  const now = new Date();
  const h = dateFns.format(now, 'HH');
  const m = dateFns.format(now, 'mm');
  const s = dateFns.format(now, 'ss');

  const timeHtml = `
    <span>
      ${h}:${m}:${s}
    </span>
  `;

  clock.innerHTML = timeHtml; 
  
  // Datum
  const dateHtml = dateFns.format(now, 'dddd Do MMMM YYYY');
  date.innerHTML = dateHtml;
};

setInterval(tick, 1000);

