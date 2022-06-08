function tabuada() {
    var num = document.getElementById("txtn")
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('por favor, digite um número')
    } else {
        var n = Number(num.value) 
        var c = 1 
        tab.innerHTML = ''
        while (c<= 10) {
            var item = document.createElement('option')//esse elemento option é muito importante. serve para criar uma box no html e voce pode acrencentar coisas nela
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
        }
    }
    
}