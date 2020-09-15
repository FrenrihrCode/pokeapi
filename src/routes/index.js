import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import About from '../pages/About';
import Footer from '../templates/Footer';

//Rutas para renderizar
const routes = {
    '/': Home,
    '/:id': Character,
    '/about': About
};

const router = async () => {
    //reemplazando los templates con los del DOM
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
    footer.innerHTML = await Footer();
};

export default router;