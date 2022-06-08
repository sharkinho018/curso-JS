function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    //hora = 10
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#FA8072'
    }
        else if (hora >=12 && hora <= 18) {
            //boa tarde
            img.src = 'img/tarde.png'
            document.body.style.background = '#FF8C00'
        }
            else {
                //boa noite
                img.src = 'img/noite.jpg'
                document.body.style.background = '#008B8B'
            }
            
        
    
}
