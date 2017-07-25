const botBuilder = require('claudia-bot-builder'),
  fbTemplate = botBuilder.fbTemplate;

let expressoes = require('./data/expressoes.json');

console.log("expressoes: " + JSON.stringify(expressoes));

module.exports = botBuilder( (request, apiReq) => {

  apiReq.lambdaContext.callbackWaitsForEmptyEventLoop = false;

  return ""+expressoes[Math.floor(Math.random() * expressoes.length)];
});
