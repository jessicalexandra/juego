document.addEventListener('DOMContentLoaded', () => {

   
    imgPosicion = [];
    imgElegida = [];
    let contador = 0;
    let acierto = document.querySelector('.aciertos');

    const imagenes = [
        {
            url: '../img/bank.jpg',
            nombre: 'bank'
        },
        {
            url: '../img/diana.jpg',
            nombre: 'diana'
        },
        {
            url: '../img/escanor.jpg',
            nombre: 'escanor'
        },
        {
            url: '../img/king.jpg',
            nombre: 'king'
        },
        {
            url: '../img/gowther.jpg',
            nombre: 'gowther'
        },
        {
            url: '../img/merlin.jpg',
            nombre: 'merlin'
        },
        {
            url: '../img/bank.jpg',
            nombre: 'bank'
        },
        {
            url: '../img/diana.jpg',
            nombre: 'diana'
        },
        {
            url: '../img/escanor.jpg',
            nombre: 'escanor'
        },
        {
            url: '../img/king.jpg',
            nombre: 'king'
        },
        {
            url: '../img/gowther.jpg',
            nombre: 'gowther'
        },
        {
            url: '../img/merlin.jpg',
            nombre: 'merlin'
        }
    ];

    imagenes.sort(() => Math.random() - 0.5);

    const tablero = document.querySelector('.tablero');

    const agregarImg = () => {
        for (let i = 0; i < imagenes.length; i++) {
            const img = document.createElement('img');
            // img.append(imagenes[i]);
            img.setAttribute('src', '../img/pregunta.jpg');
            // img.setAttribute('alt', imagenes[i].nombre);
            img.setAttribute('data-id', i);

            img.addEventListener('click', mostrarImg);
            tablero.appendChild(img);
        }
    }

    agregarImg();

    function mostrarImg() {
        let posicionImg = this.getAttribute('data-id');
        this.setAttribute('src', imagenes[posicionImg].url);

        const img = document.querySelectorAll('img')[posicionImg];
        img.setAttribute('class', 'not-active');

        imgElegida.push(imagenes[posicionImg].nombre);
        imgPosicion.push(posicionImg);
    
        if(imgElegida.length == 2) {
            setTimeout(compararImg, 300)
        }
        
    }

    function compararImg() {

        const todasImg = document.querySelectorAll('.tablero img');
        const opt1 = imgPosicion[0];
        const opt2 = imgPosicion[1];

        if (imgElegida[0] === imgElegida[1]) {
            todasImg[opt1].setAttribute('src', '../img/chulo.png');
            todasImg[opt2].setAttribute('src', '../img/chulo.png');
            contador++;
            acierto.textContent = contador;
            alert('La imagenes son iguales');
            if(contador == 6) {
                const seguir = prompt("Deseas intentarlo nuevamente (s/n)");
                if(seguir=="s"){
                    location.reload();
                }
            }
            
        } else {
            todasImg[opt1].setAttribute('src', '../img/pregunta.jpg');
            todasImg[opt2].setAttribute('src', '../img/pregunta.jpg');
            todasImg[opt1].classList.remove('not-active');
            todasImg[opt2].classList.remove('not-active');
            alert('Las imagenes no coinciden :(')
        }

        

        imgElegida = [];
        imgPosicion = [];
    }


});