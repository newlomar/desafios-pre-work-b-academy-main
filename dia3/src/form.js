import './style.css'

const form = document.querySelector('[data-js="form"]')
const input = document.querySelector('[data-js="input"]')

input.addEventListener('input', (e) => {

  const nome = e.target.value.toLowerCase()
  const arraydoNome = nome.split(' ')

  const arrayNovoNome = arraydoNome.map((item) => {

    if (item === 'de' || item === 'da' || item === 'do' || item === 'dos') {
      return item
    }
    else {
      return item.charAt(0).toUpperCase() + item.slice(1)
    }

  })

  e.target.value = arrayNovoNome.join(' ')

})

const select = document.createElement('select')
select.multiple = true

const colors = [
  {
    name: 'red',
    hex: '#f00'
  },
  {
    name: 'green',
    hex: '#0f0'
  },
  {
    name: 'blue',
    hex: '#00f'
  },
  {
    name: 'yellow',
    hex: '#ff0'
  },
  {
    name: 'purple',
    hex: '#f0f'
  }
]

const options = colors.map((cor) => {

  const option = document.createElement('option')

  option.value = cor.hex
  option.textContent = cor.name
  select.insertAdjacentElement('beforeend', option)
})

select.addEventListener('click', (e) => {
  console.log([...select.options].filter(item => item.selected))
})
form.insertAdjacentElement('beforeend', select)
