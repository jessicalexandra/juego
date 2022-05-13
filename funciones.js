document.addEventListener("DOMContentLoaded",function(){



    // DECLARAR VARIABLES
    let imagenes=[
        {
            url:"imag/escanor.jpg",
            nombre: "escanor"
        },
        {
            url:"imag/Gowther.jpg",
            nombre: "escGowtherr"
        },
        {
            url:"imag/merlin.jpg",
            nombre: "merlin"
        },
        {
            url:"imag/meliodas.jpg",
            nombre: "meliodas"
        },
        {
            url:"imag/escanor.jpg",
            nombre: "escanor"
        },
        {
            url:"imag/escanor.jpg",
            nombre: "escanor"
        },
        {
            url:"imag/escanor.jpg",
            nombre: "escanor"
        },
        {
            url:"imag/Gowther.jpg",
            nombre: "escGowtherr"
        },
        {
            url:"imag/merlin.jpg",
            nombre: "merlin"
        },
        {
            url:"imag/meliodas.jpg",
            nombre: "meliodas"
        },
        {
            url:"imag/escanor.jpg",
            nombre: "escanor"
        },
        {
            url:"imag/escanor.jpg",
            nombre: "escanor"
        }
    ]

    let tablero=document.querySelector(".tablero");

// funcion para agregar las imagenes 

function agregarimagenes(){

    for (let index = 0; index < imagenes.length; index++) {
       let img=document.createElement("img"); 
       img.setAttribute("src","imag/descarga (3).jpg")
       img.setAttribute("width","200px");
       tablero.appendChild(img);
        
        
    }
}
agregarimagenes();
})

