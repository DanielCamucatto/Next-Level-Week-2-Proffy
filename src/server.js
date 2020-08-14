//servidor
const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("./pages")

// template engine
const nunJucks = require('nunjucks')
//configurar nunjuncks
nunJucks.configure('src/views',{
    express:server,
    noCache:true,
})
//inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
//configurar arquivos estaticos (CSS, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("./save-classes", saveClasses)
.listen(5500)