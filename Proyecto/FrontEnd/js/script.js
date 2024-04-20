//Imports
import { HeaderComponent } from "../components/header/header.js";
import { FooterComponent } from "../components/footer/footer.js";

//Components
window.customElements.define("header-info", HeaderComponent);
window.customElements.define("footer-info", FooterComponent);

/** 

//add in html´s:
        <script type="module" src="./script.js"></script>
		<script src="https://unpkg.com/page/page.js"></script>
//
//EventListener to load the page
document.addEventListener('DOMContentLoaded', function () {
    //Configuración de rutas
    page('/', ()=> showContent('products-page'));
    page('/cart', ()=> showContent('cart-page'));

    //Inicializar el router
    page();
});
//Function to show the content
function showContent(contentId) {
    const contentContainer = document.getElementById('content');
}

import { HeaderComponent } from "./src/components/header/header.component.js"
import { CartPage } from "./src/pages/cart/cart.page.js";
import { FooterComponent } from "./src/components/footer/footer.component.js";
import { ProductsPage } from "./src/pages/products/products.page.js";
import {ProductComponent} from "./src/components/product/product.component.js";

document.addEventListener('DOMContentLoaded', function () {
    //Configuración de rutas
    page('/', ()=> showContent('products-page'));
    page('/cart', ()=> showContent('cart-page'));

    //Inicializar el router
    page();
});

function showContent(contentId) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = `<${contentId}> cantidadProductos="${3}"</${contentId}>`;

}

//Components
window.customElements.define('header-info', HeaderComponent);
window.customElements.define('footer-info', FooterComponent);
window.customElements.define('product-info', ProductComponent);
//Pages
window.customElements.define('products-page', ProductsPage);
window.customElements.define('cart-page', CartPage);
*/
