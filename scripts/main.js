/*const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';*/

//alert('¡SANTI HPTA!');

/*function multiplica(num1,num2) {
  let resultado = num1 * num2;
  return resultado;
  
}

multiplica(4, 7);
multiplica(20, 20);
multiplica(0.5, 3);

alert(resultado);*/
/*document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}*/

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/home.jpg') {
      miImage.setAttribute('src','images/2.jpg');
    } else {
      miImage.setAttribute('src', 'images/home.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML =  miNombre + ',¡Eres bienvienido!';
  }
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}