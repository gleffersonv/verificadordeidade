function verification(){
  let data = new Date()
  let ano = data.getFullYear()
  let fano = window.document.querySelector('#txtano')
  let res = window.document.querySelector('#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!') 
  } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.createElement ('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
      genero = 'Homem'
      if (idade >=0 && idade < 10){
        // CRIANÇA
        img.setAttribute('src', './img/homemCrianca.png')
      }else if (idade < 35){
        //JOVEM
        img.setAttribute('src', './img/homemJovem.png')
      }else if (idade <50){
        // ADULTO
        img.setAttribute('src', './img/homemMaduro.png')
      }else{
        // IDOSO
        img.setAttribute('src', './img/homemIdoso.png')
      }
    }else if ( fsex[1].checked){
      genero =  'Mulher'  
      if (idade >=0 && idade < 10){
        // CRIANÇA
        img.setAttribute('src', './img/mulherCrianca.png')
      }else if (idade < 35){
        //JOVEM
        img.setAttribute('src', './img/mulherJovem.png')
      }else if (idade <50){
        // ADULTO
        img.setAttribute('src', './img/mulherMadura.png')
      }else{
        // IDOSO
        img.setAttribute('src', './img/mulherIdosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}