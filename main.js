class ArticuloDeBox {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let productos = [
    new ArticuloDeBox("Guantes de box", 17500, 22),
    new ArticuloDeBox("Bolsa de box", 11300, 17),
    new ArticuloDeBox("Bucal", 3000, 5),
    new ArticuloDeBox("Vendas", 5000, 19),
    new ArticuloDeBox("Zapatillas de box", 100000, 10),
    new ArticuloDeBox("Guantes de box2", 30000, 35)
];

if (localStorage.getItem("productos")) {
    productos = JSON.parse(localStorage.getItem("productos"));
} else {
    productos = productos;
}

function fil() {
    const body = document.querySelector("body");
    const input = document.getElementById("filtrarP").value.trim().toUpperCase();
    const resultado = productos.filter(producto => producto.nombre.toUpperCase().includes(input));

    if (resultado.length > 0) {
        const container = document.createElement("div");
        container.classList.add("container");

        resultado.forEach(producto => {
            const card = document.createElement("div");

            ["h2", "p", "p"].forEach((element, index) => {
                const detalle = document.createElement(element);
                switch (index) {
                    case 0:
                        detalle.textContent = `${producto.nombre}`;
                        break;
                    case 1:
                        detalle.textContent = `$${producto.precio}`;
                        break;
                    case 2:
                        detalle.textContent = `Hay ${producto.stock} en stock`;
                        break;
                }
                card.appendChild(detalle);
            });

            container.appendChild(card);
        });

        body.appendChild(container);
    } else {
        alert("no tenemos ese articulo");
    }
}

function agregarProducto() {
    const form = document.createElement("form");
    form.innerHTML = `
        <label for="nombre-input">Nombre:</label>
        <input id="nombre-input" type="text" required>
        
        <label for="precio-input">Precio $</label>
        <input id="precio-input" type="number" step="0.01" required>

        <label for="stock-input">Cantidad</label>
        <input id="stock-input" type="number" required>

        <button type="submit">Agregar</button>
    `;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombreInput = document.getElementById("nombre-input").value.trim();
        const precioInput = parseFloat(document.getElementById("precio-input").value);
        const stockInput = parseInt(document.getElementById("stock-input").value);

        if (isNaN(precioInput) || isNaN(stockInput) || nombreInput === "") {
            alert("ingresa valores válidos.");
            return;
        }

        const nuevoProducto = new ArticuloDeBox(nombreInput, precioInput, stockInput);

        if (productos.some(elemento => elemento.nombre === nuevoProducto.nombre)) {
            alert("ya existe ese articulo");
            return;
        }

        productos.push(nuevoProducto);
        localStorage.setItem("productos", JSON.stringify(productos));
        alert(`se agregó ${nuevoProducto.nombre}`);

        const container = document.createElement("div");

        productos.forEach(producto => {
            const card = document.createElement("div");

            ["h2", "p", "p"].forEach((element, index) => {
                const detalle = document.createElement(element);
                switch (index) {
                    case 0:
                        detalle.textContent = `${producto.nombre}`;
                        break;
                    case 1:
                        detalle.textContent = `$${producto.precio}`;
                        break;
                    case 2:
                        detalle.textContent = `Hay ${producto.stock} en stock`;
                        break;
                }
                card.appendChild(detalle);
            });

            container.appendChild(card);
        });

        const body = document.querySelector("body");
        body.appendChild(container);

        form.reset();
    });

    const body = document.querySelector("body");
    body.appendChild(form);
}

const filtrarBtn = document.getElementById("filtrar");
filtrarBtn.classList.add("button");
filtrarBtn.addEventListener("click", fil);

const agregarBtn = document.getElementById("agregarProducto");
agregarBtn.addEventListener("click", agregarProducto);
