const Character = () => {
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="image" alt="name" />
            <h2>Name</h2>
        </article>
        <article class="Character-card">
            <h3>Episodios:</h3>
            <h3>Estado:</h3>
            <h3>Especie:</h3>
            <h3>Género:</h3>
            <h3>Origen:</h3>
            <h3>Último avistamiento:</h3>
        </article>
    </div>
    `;
    return view;
}

export default Character;