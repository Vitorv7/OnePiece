const botoes = document.querySelectorAll('.botao')

const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    desselecionaBotao()
    desselecionarPersonagem()

    botao.classList.add('selecionado')
    personagens[indice].classList.add('selecionado')
  })
})

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    '.personagem.selecionado'
  )
  personagemSelecionado.classList.remove('selecionado')
}

function desselecionaBotao() {
  const botaoSelecionado = document.querySelector('.botao.selecionado')
  botaoSelecionado.classList.remove('selecionado')
}

// SCROLLREVEAL

ScrollReveal({ reset: true })

ScrollReveal().reveal('.personagens', {
  duration: 2000
})

ScrollReveal().reveal('.botoes', {
  duration: 2000,
  rotate: { x: 90, y: 0, z: 0 }
})
