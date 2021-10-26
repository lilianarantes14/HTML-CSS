function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Erro tente outro numero')
    } else {
        var n = Number(num.value)
        var c = 1
     while (c <= 10) {
        var item = window.document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
 }
}
    
    


    