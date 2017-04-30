// Not used, but only there tro demonstrate issue
var restify = require('restify');

module.exports = function(context, req) {
  context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
 
  context.done(null, "Done!");
};
