var num  = documment.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []


function isnumero(n) {
  if(Number (n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inlista(n, l) {
  if (l.indexof(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if(isnumero(num.value) && !inlista(num.value, valores)) {
    window.alert('tudo ok')
  } else {
    window.alert('valor invalido ou ja encontrado na lista ')
  }
}

