// Importar express
const express = require('express')
// Executar o express
const server = express()
const routes = require('./routes')

// Setar o motor que será utilizado
server.set('view engine', 'ejs')

// Configurar rotas para arquivos estáticos (Habilitar arquivos estáticos)
server.use(express.static('public'))

// Usar o req.body
server.use(express.urlencoded({ extended: true }))

// Routes
server.use(routes)


// Executar servidor
server.listen(3000, () => console.log('Server running...'))