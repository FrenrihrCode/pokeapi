!function(n){var e={};function a(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e);var t=()=>'\n    <div class=\'Header-main\'>\n        <div class="Header-logo">\n            <h1>\n                <a href="/">POKE.api</a>\n            </h1>\n        </div>        \n        <div class="Header-input">\n            <form  onsubmit="window.location.href = \'#/\'+document.getElementById(\'poke\').value">\n                <input type="text" placeholder="Busca tu pokémon" id="poke" />\n                <button type="submit">Buscar</button>\n            </form>\n        </div>\n        <div class="Header-nav">\n            <a href="#/about/">Acerca de...</a>\n        </div>\n    </div>\n    ';const r="https://pokeapi.co/api/v2/pokemon/";var o=async n=>{const e=n?`${r}${n}`:r+"?limit=24&offset=0";try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error: ",n)}};var i=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var s=()=>'\n    <div class="Error404">\n        <h2>404</h2>\n        <h3>Pokémon no encontrado</h3>\n    </div>\n    ';var l=n=>{if(/^[a-zA-Z]+$/.test(n)){let e="";switch(n){case"/":e="/";break;case"about":e="/about";break;default:e="/:id"}return e}return""+n};var c=()=>"\n    <div class='Footer-main'>\n        <div class=\"Footer-content\">\n            <h4>&copy; 2020 - Desarrollado por <a href='https://twitter.com/frenrihr_code' target='_blank'>@Frenrihr</a></h4>\n        </div>\n    </div>\n    ";const d={"/":async()=>`\n        <div class="Main-info">\n            <h3>Mira la lista de los primeros 24 pokémon.</h3>\n            <p>Tambíen puedes buscar el nombre del pokémon en el buscador.</p>\n        </div>\n        <div class='Characters'>\n        ${(await o()).results.map((n,e)=>`\n            <article class='Characters-item'>\n                <a href='#/${n.name}/'>\n                    <img src='https://pokeres.bastionbot.org/images/pokemon/${e+1}.png' alt='${n.name}' />\n                    <h2>${n.name}</h2>\n                </a>\n            </article>\n        `).join("")}\n        </div>\n    `,"/:id":async()=>{const n=i(),e=await o(n);if(e){const{id:n,abilities:a,name:t,types:r,weight:o,height:i,stats:s}=e;return`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src='https://pokeres.bastionbot.org/images/pokemon/${n}.png' alt="${t}" />\n                <h2>${t}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Tipos:</h3>\n                <ul>\n                    ${r.map(n=>"<li>"+n.type.name+"</li>").join("")}\n                </ul>\n                <h3>Habilidades:</h3>\n                <ul>\n                    ${a.map(n=>`<li>${n.ability.name} ${n.is_hidden?"(Oculta)":""}</li>`).join("")}\n                </ul>\n                <h3>Estadísticas base:</h3>\n                <ul>\n                    ${s.map(n=>`<li>${n.stat.name}: ${n.base_stat}</li>`).join("")}\n                </ul>\n                <h3>Peso: ${o/10} Kg.</h3>\n                <h3>Altura: ${i/10} m.</h3>\n            </article>\n        </div>\n        `}return'\n    <div class="Error404">\n        <h2>404</h2>\n        <h3>Pokémon no encontrado</h3>\n    </div>\n    '},"/about":()=>'\n    <div class="About">\n        <h2>Acerca de esta página</h2>\n        <ul>\n        <li>\n        <p>\n            Esta es una página que trabaja con la maravillosa API: <a href="https://pokeapi.co/" target="_blank">PokéAPI</a>.\n            Puedes dirigirte a su página y comenzar a usar esta API de la misma forma que yo lo hice 😉.\n        </p>\n        </li>\n        <li>\n        <p>Para las imágenes de cada pokémon usé la https://pokeres.bastionbot.org Pokemon (Pokeres) API</p>\n        </li>\n        <li>\n        <p class="About-code">\n            Está página fue elaborada por <a href="https://twitter.com/frenrihr_code" target="_blank">@Frenrihr</a>\n        </p>\n        </li>\n        <li>\n        <p>Puedes visitar mi blog <a href="https://blog.frenrihr.com" target="_blank">FrenrihrBlog</a></p>\n        </li>\n        </ul>\n    </div>\n    '};var u=async()=>{const n=document.getElementById("header"),e=document.getElementById("content"),a=document.getElementById("footer");n.innerHTML=await t();let r=i(),o=await l(r),u=d[o]?d[o]:s;e.innerHTML=await u(),a.innerHTML=await c()};window.addEventListener("load",u),window.addEventListener("hashchange",u)}]);