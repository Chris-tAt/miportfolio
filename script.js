let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("proyect");
        habilidades[7].classList.add("proyect");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");

        habilidades[10].classList.add("comunicacion");
        habilidades[11].classList.add("proyect");
        habilidades[12].classList.add("proyect");
        habilidades[13].classList.add("proyect");
        habilidades[14].classList.add("dedicacion");
        habilidades[15].classList.add("proyect");
        habilidades[16].classList.add("dedicacion");
        habilidades[17].classList.add("proyect");
        habilidades[18].classList.add("dedicacion");
       
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

document.addEventListener("DOMContentLoaded", function() {
    // Agrega un evento de clic a la imagen del teléfono
    document.getElementById("telefonoImagen").addEventListener("click", function() {
      // Obtén el número de teléfono del elemento oculto
      var numeroTelefono = document.getElementById("numeroTelefono").textContent;
      
      // Crea un elemento de texto temporal para copiar al portapapeles
      var elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = numeroTelefono;
      
      // Agrega el elemento temporal al DOM
      document.body.appendChild(elementoTemporal);
      
      // Selecciona y copia el contenido al portapapeles
      elementoTemporal.select();
      document.execCommand("copy");
      
      // Elimina el elemento temporal
      document.body.removeChild(elementoTemporal);
      
      // Muestra una alerta con el mensaje
      alert("Número copiado al portapapeles: " + numeroTelefono);
    });
  });