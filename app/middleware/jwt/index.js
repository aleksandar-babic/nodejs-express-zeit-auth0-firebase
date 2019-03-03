require('dotenv').config()
const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')

const authJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: process.env.RATE_LIMIT_RPM,
    jwksUri: `https://${process.env.ISSUER_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUDIENCE,
  issuer: `https://${process.env.ISSUER_DOMAIN}/`,
  algorithms: ['RS256'],
})

module.exports = authJwt
