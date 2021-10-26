function contar () {
    var ini = document.getElementById('in')
    var fim = document.getElementById('fi')
    var pass = document.getElementById('pas')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO] valor invalido')
    } else {
        res.innerHTML = ('Contando... <br>')
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (p <= 0){
            window.alert('Numero invalido vamos iniciar com o numero 1')
            p = 1
        }
        if (i < f ){
           for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F603}`
            } 
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F603}`
            }
        
            
        } 
        res.innerHTML += `\u{1F3C1}`

    }
}
