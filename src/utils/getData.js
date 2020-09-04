//const API = 'https://rickandmortyapi.com/api/character/';
const API = "https://pokeapi.co/api/v2/pokemon/"

const getData = async (id) => {
    const apiUrl = id ? `${API}${id}` : `${API}?limit=24&offset=0`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error: ', error)
    }
};

export default getData;