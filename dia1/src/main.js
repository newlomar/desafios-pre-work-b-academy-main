import './style.css'

const app = document.querySelector("[data-js='app']")

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>`

const link = document.querySelector('[data-js="link"]')

link.addEventListener('click', (event) => {

  event.preventDefault()
  link.textContent = app.classList.contains('hide') ? 'Limpar' : 'Mostrar conteúdo'
  app.classList.toggle('hide')

}, false);