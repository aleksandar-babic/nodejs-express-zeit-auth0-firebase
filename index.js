const app = require('./app')

app.get('*', (req, res) => {
  res.write('<h1><marquee direction=right>Hello from Express path `/` on Now 2.0!</marquee></h1>')
  res.write('<h2>Go to <a href="/about">/about</a> updated</h2>')
  res.end()
})

module.exports = app
