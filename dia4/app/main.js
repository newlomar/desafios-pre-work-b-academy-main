import './style.css'

const url = 'http://localhost:3333/cars'
const table = document.querySelector('[data-js="table"]')
const form_carros = document.querySelector('[data-js="form_carros"]')
console.log(form_carros)

const inserirNaTabela = (data) => {
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
}

const buscarCarros = async () => {

  const carros = await fetch(url)
  const data = await carros.json()

  if(data.length === 0) {

    const tr = document.createElement('tr')
    tr.className = 'lista-vazia'
    tr.textContent = 'Nenhum carro encontrado.'
    table.insertAdjacentElement('beforeend', tr)

    return
  }

}

buscarCarros()
