
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
});


var mail = {

    sendMail:function(req,res){
        transporter.sendMail({
            from: 'zakir0559@gmail.com',
            to: 'zakir.shaik@imaginea.com',
            subject: 'hello',
            text: 'hello world!'
        },function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);

        });

    },

    showHomePage:function(req,res){
        res.render('index', { title: 'Express' });
    }

}

module.exports = mail;
