//RESUELVE TUS EJERCICIOS AQUI

//Ejercicio 1 (Devuelve todas las razas de perro)

function getAllBreeds(){
  const urlPerros = "https://dog.ceo/api/breeds/list";
  return fetch(urlPerros)
    .then((response) => response.json())
    .then((data) => data.message)
    .catch((error) => {
      alert (`Error al obtener todas las razas de perro ${error}`)
    })
}

getAllBreeds().then((razas) => console.log(razas))


//Ejercicio 2

function getRandomDog(){
  const urlPerroAleatorio = "https://dog.ceo/api/breeds/image/random";
  return fetch(urlPerroAleatorio)
    .then((response) => response.json())
    .then((imagen) => imagen.message)
    .catch((fallo) => {
      console.error("Error al mostrar tu perro", fallo)
    })
}

getRandomDog().then((perroAleatorio) => console.log(perroAleatorio))

//Ejercicio 3

function getAllImagesByBreed(){
  const razaKomondor = "https://dog.ceo/api/breed/komondor/images";
  return fetch(razaKomondor)
    .then((resp) => resp.json())
    .then((komondor) => komondor.message)
    .catch((error) => {
      alert(`Error al mostrar las imágenes de la raza Komondor${error}`)
    })
}

getAllImagesByBreed().then((perroKomondor) => console.log(perroKomondor))

//Ejercicio 4

function getAllImagesByBreed2(breed) {
  const urlRaza = "https://dog.ceo/api/${breed}/list";
  return fetch(urlRaza)
    .then((respu) => respu.json())
    .then((data) => {
      for(data of breed.message){
        //Aquí me quedé
      }
    })
    .catch((failure) => {
      console.log(`Error al obtener la imagen de tu raza${failure}`)
    })
}

getAllImagesByBreed2().then((breed) => console.log(breed))

//Ejercicio 5

function getGitHubUserProfile(username){
  const usuariosGitHub = "https://api.github.com/users/${username}"
  return fetch(usuariosGitHub)
    .then((res) => res.json())
    .then((data) => data.login)
    .catch((error) => console.log("El perfil que buscas no está disponible en este momento", error))
}

getGitHubUserProfile().then((username) => console.log(username))

//Ejercicio 6

function printGithubUserProfile(username){
  const usuarioGitHub = "https://api.github.com/users/${username}"
  return fetch

  const contenedorUsuario = document.createElement("div");
  const nombreUsuario = document.createElement("p")
  const fotoUsuario = document.createElement("img");
  
  contenedorUsuario.appendChild(fotoUsuario);
  contenedorUsuario.appendChild(nombreUsuario);
}

//Ejercicio 7

//Ejercicio 8


