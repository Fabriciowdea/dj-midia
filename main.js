function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {
    const instrumento = listaDeTeclas[contador].classList[1];

    listaDeTeclas[contador].onclick = function() {
        tocaSom(`#som_${instrumento}`);
    }

    listaDeTeclas[contador].onkeypress = function(evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
        listaDeTeclas[contador].classList.add('ativa');
        }
    }

    listaDeTeclas[contador].onkeyup = function() {
        listaDeTeclas[contador].classList.remove('ativa');
    }
}