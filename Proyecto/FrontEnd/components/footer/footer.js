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
        <div class="footer-section">
            <h3>Equipo</h3>
            <p>Alec</p>
            <p>Isaac</p>
            <p>David</p>
        </div>
        <div class="footer-section">
            <h3>Acerca de nosotros</h3>
            <p>Reserva de vuelos a todo el Mundo,<br>desde México que es nuestro país de <br>origen, todo elcontinente Americano y <br>Europeo, con visión a futuro de llegar al<br>continente Asiatico</p>
        </div>
        <div class="footer-section">
            <h3>Escríbenos</h3>
            <p>Correo electrónico: ejemplo@example.com</p>
        </div>
        <div class="copyright">
            <p>&copy; 2024 A-Airlines. Todos los derechos reservados.</p>
        </div>
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
