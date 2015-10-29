
var mailer = require('./mailer')

module.exports = function(app) {
    app.get('/', mailer.showHomePage)
    app.post('/sendMail',mailer.sendMail)
}