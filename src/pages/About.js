const About = () => {
    const view = `
    <div class="About">
        <h2>Acerca de esta página</h2>
        <ul>
        <li>
        <p>
            Esta es una página que trabaja con la maravillosa API: <a href="https://pokeapi.co/" target="_blank">PokéAPI</a>.
            Puedes dirigirte a su página y comenzar a usar esta API de la misma forma que yo lo hice 😉.
        </p>
        </li>
        <li>
        <p>Para las imágenes de cada pokémon usé la https://pokeres.bastionbot.org Pokemon (Pokeres) API</p>
        </li>
        <li>
        <p class="About-code">
            Está página fue elaborada por <a href="https://twitter.com/frenrihrcode" target="_blank">@Frenrihr</a>
        </p>
        </li>
        <li>
        <p>Puedes visitar mi blog <a href="https://blog.frenrihr.com" target="_blank">FrenrihrBlog</a></p>
        </li>
        </ul>
    </div>
    `;
    return view;
}

export default About;