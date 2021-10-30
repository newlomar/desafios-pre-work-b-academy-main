import './style.css'

const url = 'http://localhost:3333/cars'
const table = document.querySelector('[data-js="table"]')
const form_carros = document.querySelector('[data-js="form_carros"]')

const inserirNaTabela = (data) => {

  const tableLastChild = table.lastChild

  if(tableLastChild.textContent === 'Nenhum carro encontrado.') {
    table.removeChild(table.lastChild)
  }

  const tr = document.createElement('tr')

  const tdImg = document.createElement('td')
  const img = document.createElement('img')
  img.src = `${data.image}`
  tdImg.insertAdjacentElement('beforeend', img)

  const tdMarca = document.createElement('td')
  tdMarca.textContent = `${data.brandModel}`

  const tdAno = document.createElement('td')
  tdAno.textContent = data.year

  const tdPlaca = document.createElement('td')
  tdPlaca.textContent = data.plate

  const tdCor = document.createElement('td')
  const colorSquare = document.createElement('div')
  colorSquare.style.width = '100px'
  colorSquare.style.height = '100px'
  colorSquare.style.background = `${data.color}`
  tdCor.insertAdjacentElement('afterbegin', colorSquare)

  const tdDelete = document.createElement('td')
  const deleteButton = document.createElement('button')
  deleteButton.setAttribute('type', 'submit')
  deleteButton.textContent = 'Excluir'
  deleteButton.addEventListener('click', (e) => {
    const linha = e.target.parentElement.parentElement
    table.removeChild(linha)
    deletarCarro(linha.children[3].textContent)
  })
  tdDelete.insertAdjacentElement('afterbegin', deleteButton)

  tr.insertAdjacentElement('beforeend', tdImg)
  tr.insertAdjacentElement('beforeend', tdMarca)
  tr.insertAdjacentElement('beforeend', tdAno)
  tr.insertAdjacentElement('beforeend', tdPlaca)
  tr.insertAdjacentElement('beforeend', tdCor)
  tr.insertAdjacentElement('beforeend', tdDelete)

  table.insertAdjacentElement('beforeend', tr)
  form_carros.reset()
  // inputInicial.focus()
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

  data.forEach(item => inserirNaTabela(item))

}

const cadastrarCarro = (e) => {

  e.preventDefault()
  const dados = e.target.elements

  const body = {
    image: dados['image_url'].value,
    brandModel: dados['marca_modelo'].value,
    year: dados.ano.value,
    plate: dados.placa.value,
    color: dados.cor.value
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  .then((result) => {
    if (!result.ok) {
      return result.json()
    }

    inserirNaTabela(body)

    return result.json()
  })
  .then((res) => {

    if(res.error) {
      console.log('Erroooooooooooooooooooooooooooooooor!')
    }

    console.log(res.message)

  })
  .catch(error => console.log('Erro: ', error))
}

const deletarCarro = (placa) => {

  const body = {
    plate: placa
  }
  fetch(url, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  .then((result) => {
    if (!result.ok) {
      return result.json()
    }

    return result.json()
  })
  .then((res) => {

    if(res.error) {
      console.log('Erroooooooooooooooooooooooooooooooor!')
    }

    console.log(res.message)

  })
  .catch(error => console.log('Erro: ', error))
}

form_carros.addEventListener('submit', cadastrarCarro)
buscarCarros()
