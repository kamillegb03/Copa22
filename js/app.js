/* const bandeiras = {
    catar: "./img/A/qatar.png",
    equador: "./img/A/ehcuador.png",
    senegal: "./img/A/senegal.png",
    holanda: "./img/A/netherlands.png",
    inglaterra: "./img/B/england.png",
    ira: "./img/B/iran.png",
    usa: "./img/B/usa.png",
    random1: "./img/B/random.png",
    argentina: "./img/C/argentina.png",
    arabiaSaudita: "./img/C/saudi-arabia.png",
    mexico: "./img/C/mexico.png",
    polonia: "./img/C/poland.png",
    franca: "./img/D/france.png",
    random2: "./img/D/random.png",
    dinamarca: "./img/D/denmark.png",
    tunisia: "./img/D/tunisia.png",
    espanha: "./img/E/spain-2.png",
    random3: "./img/E/random.png",
    alemanha: "./img/E/germany.png",
    japao: "./img/E/japan.png",
    belgica: "./img/F/belgium.png",
    canada: "./img/F/canada.png",
    marrocos: "./img/F/morocco.png",
    croacia: "./img/F/croatia.png",
    brasil: "./img/G/brazil.png",
    serbia: "./img/G/serbia.png",
    suica: "./img/G/switzerland.png",
    camaroes: "./img/G/cameroon.png",
    portugal: "./img/H/portugal.png",
    gana: "./img/H/ghana.png",
    uruguai: "./img/H/uruguay.png",
    coreia: "./img/H/south-korea.png"
} */

// Material utilizado para desenvolver o código:
// youtube: https://www.youtube.com/watch?v=6wn8hpUcEcM
// github-video: https://github.com/rocketseat-content/youtube-masterclass-drag-and-drop-raiz
// w3schools: https://www.w3schools.com/jsref/dom_obj_all.asp

const bandeiras = document.querySelectorAll('.bandeira')
const dropzones = document.querySelectorAll('.dropzone')


/* adicionar ouvidores de evento para cara bandeira */
bandeiras.forEach(bandeira => {
    bandeira.addEventListener('dragstart', dragstart)
    bandeira.addEventListener('drag', drag)
    bandeira.addEventListener('dragend', dragend)
})

function dragstart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    // this = bandeira
    this.classList.add('is-dragging')
}

function drag() {
    // Bandeira está sendo arrastada
}

function dragend() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    // this = bandeira
    this.classList.remove('is-dragging')
}



/* lugar onde as bandeiras iram ser soltas */
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    // entrou na zona
}

function dragover(event) {
    // this = dropzone
    this.classList.add('over')

    const bandeiraArrastada = document.querySelector('.is-dragging').cloneNode(true)
    flag = true;

    // verifica se a bandeira arrastada já existe dentro da zona
    this.childNodes.forEach(node => {
        if (node.src == bandeiraArrastada.src) {
            flag = false;
        }
    })

    // verifica se a zona possui espaço livre (limite de bandeiras: 2)
    if (this.childElementCount <= 1 && flag) {
        event.preventDefault()
    }
}

function dragleave() {
    // this = dropzone
    this.classList.remove('over')

}

function drop() {
    // pega a bandeira que está sendo arrastada
    const bandeiraArrastada = document.querySelector('.is-dragging').cloneNode(true)
    bandeiraArrastada.setAttribute('onclick', 'removeBandeira(this)')

    // this = dropzone
    this.appendChild(bandeiraArrastada)
    this.classList.remove('over')
}

function removeBandeira(bandeiraSelecionada) {
    bandeiraSelecionada.remove();
}
