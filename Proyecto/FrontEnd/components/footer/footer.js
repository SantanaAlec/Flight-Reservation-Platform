export class FooterComponent extends HTMLElement {
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
        <footer>
            <p class="left">Left aligned text here<br />Next line here</p>
            <p class="right">Right aligned text here<br />Next line here</p>
            <p class="centered">Center Text here<br />Next line here</p>
        </footer>
        `;
    }

    #agregarEstilo(shadow) {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "../components/footer/footer.css");
        shadow.appendChild(link);
    }
}
