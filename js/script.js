const mussarela = document.getElementById("mussarela")
const calabresa = document.getElementById("calabresa")
const marguerita = document.getElementById("marguerita")
const env = document.getElementById("enviar")
const est = document.getElementById("estorno")
const pla = document.getElementById("btplanilha")

pla.addEventListener("click", enviar)

function enviar() {
    TableToExcel.convert(document.getElementById("tabela"));

}

var cCalabresa = 0
var acCalabresa = 0.0

var cMussarela = 0
var acMussarela = 0.0

var cMarguerita = 0
var acMarguerita = 0.0

env.addEventListener("click", vender)
est.addEventListener("click", estornar)

function estornar() {
    if (mussarela.checked) {
        if (cMussarela > 0) {
            cMussarela--
            acMussarela -= 20.99
            document.getElementById("quantidadem").innerHTML = cMussarela
            document.getElementById("somam").innerHTML = "R$" + acMussarela.toFixed(2)
        }
    } else if (calabresa.checked) {
        if (cCalabresa > 0) {
            cCalabresa--
            acCalabresa -= 30.00
            document.getElementById("quantidadec").innerHTML = cCalabresa
            document.getElementById("somac").innerHTML = "R$" + acCalabresa.toFixed(2)
        }
    } else {
        if (cMarguerita > 0) {
            cMarguerita--
            acMarguerita -= 25.90
            document.getElementById("quantidadema").innerHTML = cMarguerita
            document.getElementById("somama").innerHTML = "R$" + acMarguerita.toFixed(2)
        }
    }
}

function vender() {
    if (mussarela.checked) {
        cMussarela++
        acMussarela += 20.99
        document.getElementById("quantidadem").innerHTML = cMussarela
        document.getElementById("somam").innerHTML = "R$" + acMussarela.toFixed(2)
    } else if (calabresa.checked) {
        cCalabresa++
        acCalabresa += 30.00
        document.getElementById("quantidadec").innerHTML = cCalabresa
        document.getElementById("somac").innerHTML = "R$" + acCalabresa.toFixed(2)
    } else {
        cMarguerita++
        acMarguerita += 25.90
        document.getElementById("quantidadema").innerHTML = cMarguerita
        document.getElementById("somama").innerHTML = "R$" + acMarguerita.toFixed(2)
    }
}

function vendido(){
    alert('Obrigado por comprar conosco!')
}