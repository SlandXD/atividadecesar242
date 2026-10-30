var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.render('formulario')
})

app.post('/Script_do_Formulario.php', function (req, res) {
  var nome = req.body.nomezinho
  var sobrenome = req.body.sobrenome

  res.render('resposta', { nome: nome, sobrenome: sobrenome })
})

app.listen(3000)
console.log('rodando na porta 3000')
