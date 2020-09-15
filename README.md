# POKE.api

Esta es una Single Single Page Application con JavaScript Vanilla, la cual permite renderizar los primeros 24 pokémon y sus principales datos. Adicionalmente se puede buscar cualquier pokémon mediante un buscador.

### [Live Demo](https://frenrihrcode.github.io/pokeapi/)
#### Imágenes de muestra
![Image of Yaktocat](pokeapipreview1.png)
![Image of Yaktocat](pokeapipreview2.png)

## Instalación
Una vez clones este repositorios ejecuta los siguientes comandos:

```bash
npm install
npm run start
# también puedes usar yarn
yarn install
yarn run start
```
Para desplegar la aplicación ejecuta el comando:

```bash
npm run build
# yarn
yarn run build
```
La aplicación ya cuenta con un flujo de GitHub actions para poder desplegar automáticamente en GitHub Pages:
#### Es necesario tener una rama llamada gh-pages (si no la tienes créala).
Para más información visita [Deploy to GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages). Del cual me base para crear la configuración.

## Importante
Como estube haciendo uso de GithubPages me vi obligado a cambiar la url de redireccionamiento a Home, para que funcione en GitHub Pages.
Para ver la aplicación en modo local vaya al archivo:

#### src/templates/Header.js

```javascript
const Header = () => {
    const view = `
    <div class='Header-main'>
        <div class="Header-logo">
            <h1>
                <a href="pokeapi/">POKE.api</a>
            </h1>
```
Cambie el contenido del atributo href de la etiqueta anchor por "/":
#### Resultado:
```javascript
const Header = () => {
    const view = `
    <div class='Header-main'>
        <div class="Header-logo">
            <h1>
                <a href="/">POKE.api</a>
            </h1>
```
## Licencia
[MIT](https://choosealicense.com/licenses/mit/)