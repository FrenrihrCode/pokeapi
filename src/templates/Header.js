const Header = () => {
    const view = `
    <div class='Header-main'>
        <div class="Header-logo">
            <h1>
                <a href="/">POKE.api</a>
            </h1>
        </div>        
        <div class="Header-input">
            <form  onsubmit="window.location.href = '#/'+document.getElementById('poke').value">
                <input type="text" placeholder="Busca tu pokémon" id="poke" />
                <button type="submit">O</button>
            </form>
        </div>
        <div class="Header-nav">
            <a href="#/about/">Acerca de...</a>
        </div>
    </div>
    `;
    return view;
}

export default Header;