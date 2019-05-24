const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');


// MIDDLEWARE
exports.checkJWT = jwt({ 
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://dev-2ewxg5mz.auth0.com/.well-known/jwks.json'
      }),
    audience: 'B3EPbm6jQQzDFIN0nBklXCKxm82UkEhs',
    issuer: 'https://dev-2ewxg5mz.auth0.com/',
    algorithms: ['RS256']
})