const botBuilder = require('claudia-bot-builder'),
  fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder( (request, apiReq) => {

  apiReq.lambdaContext.callbackWaitsForEmptyEventLoop = false;

  return `Oxe! O que tu ta dizendo moço ?`
});
