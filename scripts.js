const GalleryElement = document.getElementById('gallery')
const ImageModalElement = document.getElementById('modal-image')
const ModalElement = document.getElementById('modal')
const CloseIconElement = document.getElementById('close-icon')
const ArrowRight = document.getElementById('arrow-right')
const ArrowLeft = document.getElementById('arrow-left')
const AllImagesSrc = Array.from(document.querySelectorAll('.gallery__image'))

GalleryElement.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        ModalElement.classList.toggle('modal--show')
        ImageModalElement.src = event.target.src;

        contador = AllImagesSrc.indexOf(event.target);
    }
})

CloseIconElement.addEventListener('click', () => {
    ModalElement.classList.remove('modal--show')
})

let contador = 0

const CambiarSiguienteFoto = () => {
    if (contador >= AllImagesSrc.length - 1) {
        contador = 0
    } else { contador = contador + 1 }
    ImageModalElement.classList.add('modal-image-fade')
}


const CambiarAnteriorFoto = () => {
    if (contador <= 0) {
        contador = AllImagesSrc.length - 1
    } else {
        contador = contador - 1;
    }
    ImageModalElement.classList.add('modal-image-fade')
}

ArrowLeft.addEventListener('click', CambiarAnteriorFoto)
ArrowRight.addEventListener('click', CambiarSiguienteFoto)

ImageModalElement.addEventListener('transitionend', () => {
    ImageModalElement.classList.remove('modal-image-fade')
    ImageModalElement.src = AllImagesSrc[contador].src
    ImageModalElement.classList.add('modal-image-show')
})