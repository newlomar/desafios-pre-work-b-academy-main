const form_carros = document.querySelector('[data-js="form_carros"]')
const table = document.querySelector('[data-js="table"]')

form_carros.addEventListener('submit', (e) => {

  e.preventDefault()

  const dados = e.target.elements
  const inputInicial = document.querySelector('[data-js="input_inicial"]')

  const tr = document.createElement('tr')

  const tdImg = document.createElement('td')
  const img = document.createElement('img')
  img.src = `${dados['image_url'].value}`
  tdImg.insertAdjacentElement('beforeend', img)

  const tdMarca = document.createElement('td')
  tdMarca.textContent = `${dados['marca_modelo'].value}`

  const tdAno = document.createElement('td')
  tdAno.textContent = dados.ano.value

  const tdPlaca = document.createElement('td')
  tdPlaca.textContent = dados.placa.value

  const tdCor = document.createElement('td')
  const colorSquare = document.createElement('div')
  colorSquare.style.width = '100px'
  colorSquare.style.height = '100px'
  colorSquare.style.background = `${dados.cor.value}`
  tdCor.insertAdjacentElement('afterbegin', colorSquare)

  tr.insertAdjacentElement('beforeend', tdImg)
  tr.insertAdjacentElement('beforeend', tdMarca)
  tr.insertAdjacentElement('beforeend', tdAno)
  tr.insertAdjacentElement('beforeend', tdPlaca)
  tr.insertAdjacentElement('beforeend', tdCor)

  table.insertAdjacentElement('beforeend', tr)
  form_carros.reset()
  inputInicial.focus()
})
