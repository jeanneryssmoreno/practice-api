const container = document.getElementById('characters-container')
const API_URL = 'https://thesimpsonsapi.com/api/characters';


const fechtCharacter = async () => {
    console.log('iniciando la peticion de la Api...')

    const response = await fetch(API_URL);
    const data = await response.json()

    console.log('datos recibidos', data);

    container.innerHTML = '<h2>¡Datos cargados con éxito! Revisa la consola.</h2>';

}

fechtCharacter()