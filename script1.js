let verificar = () => {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById('txtAno')
  var res = document.getElementById('res')
  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert('Verifique os dados e tente novamente.')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 21) {
        //criança
        img.setAttribute('src', 'menino.png')
      } else if (idade >= 21 && idade < 65) {
        //adulto
        img.setAttribute('src', 'homem.png')
      } else {
        //idoso
        img.setAttribute('src', 'idoso.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'menina.png')
      } else if (idade >= 10 && idade < 65) {
        //adulto
        img.setAttribute('src', 'mulher.png')
      } else {
        //idoso
        img.setAttribute('src', 'idosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.style.padding = '8px'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
