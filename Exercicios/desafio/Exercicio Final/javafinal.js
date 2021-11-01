var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isnumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true

    } else {
        return false
    }
    
}
function validar() {
    if (isnumber(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createAttribute('options')
        item.text = `O valor $(num) foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('tente')
    }
}