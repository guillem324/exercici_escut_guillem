window.onload = function () {
    let escut = document.querySelector('#escut');
    escut.addEventListener('click', vermellClick);
    escut.addEventListener('contextmenu', blauClick);
    escut.addEventListener('mouseover', verdHover);
    document.addEventListener('keydown', apretarTecla);

    let boton = document.querySelector('#anadirElemento');
    boton.addEventListener('click', anadirElemento);

    crearTargeta();
};

function vermellClick ()
{
    let contadorVermell = document.querySelector('#vermell');
    contadorVermell.innerHTML= Number (contadorVermell.innerHTML)+1;
}
function blauClick (event)
{
    event.preventDefault();
    let contadorBlau = document.querySelector('#blau');
    contadorBlau.innerHTML = Number(contadorBlau.innerHTML) + 1;
}

function verdHover ()
{
    let contadorVerd = document.querySelector('#verd');
    contadorVerd.innerHTML = Number(contadorVerd.innerHTML) + 1;
}
function apretarTecla(event)
{
    event.preventDefault();
    let contadorTaronja = document.querySelector('#taronja');
    contadorTaronja.innerHTML = Number(contadorTaronja.innerHTML) + 1;

    let contadorGroc = document.querySelector('#groc');
    contadorGroc.innerHTML = event.key;

    if (event.key == 'g') {
        let contadorLila = document.querySelector('#lila');
        contadorLila.innerHTML = Number(contadorLila.innerHTML) + 1;
    }
}

let numElementos = 0;

function anadirElemento() {
    let lista = document.querySelector('.lista');

    if (!lista) {
        console.error("No se encontró la lista.");
        return;
    }

    let nuevoElemento = document.createElement('li');
    nuevoElemento.classList.add('element');
    nuevoElemento.id = `elemento${numElementos}`;
    numElementos++;
    nuevoElemento.innerHTML = `Este es el elemento ${numElementos}`;
    
    lista.append(nuevoElemento);
}

function crearTargeta ()
{
    let contenidorTargeta = document.querySelector('#user');
    let targeta = document.createElement('div');
    targeta.classList.add('targeta')
    contenidorTargeta.append(targeta)
    let nom = document.createElement('h1');
    nom.innerHTML= user.nom + ' '+ user.apellido;
    targeta.append(nom)

    let edat = document.createElement('p');
    edat.innerHTML = `edat: ${user.edat} años`
    targeta.append(edat);

    let aficionsTitol = document.createElement('h2');
    aficionsTitol.innerHTML='AFICIONS'
    targeta.append(aficionsTitol)
    let caixaAficions = document.createElement('div')
    caixaAficions.classList.add('caixaAficions')
    let 
    
}   
let user = 
{
    nombre: "Roberto",
    apellido: "Heras",
    edad: 35,
    aficiones: ["escalada","sushi","papiroflexia"]
}
