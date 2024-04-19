class PlaneList extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ul>
                <li>Avión 1</li>
                <li>Avión 2</li>
                <li>Avión 3</li>
            </ul>
        `;
    }
}

customElements.define('plane-list', PlaneList);
