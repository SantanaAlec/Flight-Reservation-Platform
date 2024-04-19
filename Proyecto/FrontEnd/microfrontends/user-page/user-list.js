class UserList extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ul>
                <li>Usuario 1</li>
                <li>Usuario 2</li>
                <li>Usuario 3</li>
            </ul>
        `;
    }
}

customElements.define('user-list', UserList);
