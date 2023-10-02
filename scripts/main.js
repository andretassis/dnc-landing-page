var setaEsquerda = document.getElementById('seta-esquerda');
var leonardo = document.getElementById('card-leonardo')
var samantha = document.getElementById('card-samantha')
var bruna = document.getElementById('card-bruna')
var setaDireita = document.getElementById('seta-direita');

setaDireita.addEventListener('click', () => {
    leonardo.classList.add('oculto');
    bruna.classList.remove('oculto');
    setaDireita.classList.add('oculto');
    setaEsquerda.classList.remove('oculto');
})

setaEsquerda.addEventListener('click', () => {
    leonardo.classList.remove('oculto');
    bruna.classList.add('oculto');
    setaDireita.classList.remove('oculto');
    setaEsquerda.classList.add('oculto');
})