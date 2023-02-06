//helpers 

const hbs = require('hbs');

hbs.registerHelper('date', (date) => {
  const minDiff = (Date.now() - date.getTime()) / 1000 / 60;
  return `${minDiff} minutes ago`;
})