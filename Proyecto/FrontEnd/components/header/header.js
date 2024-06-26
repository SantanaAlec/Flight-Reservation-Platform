export class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" }); // Crea un Shadow DOM abierto y lo asocia con el elemento personalizado.
        this.#agregarEstilo(shadow); // Llama al método privado #agregaEstilo para agregar los estilos al Shadow DOM.
        this.#render(shadow); // Llama al método privado #render para renderizar el contenido en el Shadow DOM.
    }

    // Método privado para renderizar el contenido
    #render(shadow) {
        shadow.innerHTML += `
        <header>
            <div class="logo">
                <img src="../assets/img/icons/viajar.png" alt="logo">
                <h1>A-AIRLINES</h1>
            </div>
            <br>
            <div id="navBar">
                <nav>
                    <ul>
                        <li><a href="./homePage.html">Inicio</a></li>
                        <li><a href="./flightsPage.html">Mis vuelos</a></li>
                        <li><a href="./helpPage.html">Ayuda</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                    <li><a href="./accountPage.html">Iniciar Sesión</a></li>
                    <li><a href="./registerPage.html">Registrarse</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        `;
    }

    #agregarEstilo(shadow) {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "../components/header/header.css");
        shadow.appendChild(link);
    }
}
