const form_carros = document.querySelector('[data-js="form_carros"]')
const table = document.querySelector('[data-js="table"]')

form_carros.addEventListener('submit', (e) => {

  e.preventDefault()

  const dados = e.target.elements

  const tr = document.createElement('tr')

  const tdImg = document.createElement('td')
  const img = document.createElement('img')
  img.src = `${dados['image_url'].value}`
  tdImg.insertAdjacentElement('beforeend', img)

  const tdMarca = document.createElement('td')
  tdMarca.textContent = `${dados['marca_modelo'].value}`

  const tdAno = document.createElement('td')
  tdAno.textContent = dados.ano.value

  const tdCor = document.createElement('td')
  tdCor.textContent = dados.cor.value


  tr.insertAdjacentElement('beforeend', tdImg)
  tr.insertAdjacentElement('beforeend', tdMarca)
  tr.insertAdjacentElement('beforeend', tdAno)
  tr.insertAdjacentElement('beforeend', tdCor)

  table.insertAdjacentElement('beforeend', tr)
  form_carros.reset()
})
