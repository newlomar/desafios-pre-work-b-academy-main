const form = document.querySelector('[data-js="form"]')

form.addEventListener('input', (e) => {

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
