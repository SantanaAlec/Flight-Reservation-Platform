var reservaciones = document.getElementById("reservasButton");
reservaciones.addEventListener("click", getReservations);

//Add event listener when the page is loaded get reservations
window.addEventListener("load", getReservations);

function getReservations() {
    //Get reservations from backend
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/api/reservations", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            loadReservationsInHTML(JSON.parse(xhr.responseText));
        }
    };

    xhr.send();
}

function loadReservationsInHTML(reservations) {
    console.log(reservations);

    var tablaReservaciones = document.getElementById("reservaciones");

    let html =     `
    <tr>
    <th>Origen</th>
    <th>Destino</th>
    <th>Fecha de partida</th>
    <th>Fecha de regreso</th>
    <th>Asientos: Adultos</th>
    <th>Asientos: Niños</th>
    <th>Asientos: Infantes</th>
    </tr>
`;

    for (const reservation of reservations) {
        html += `<tr>`;
        html += `<td>${reservation.origin}</td>`;
        html += `<td>${reservation.destination}</td>`;
        html += `<td>${reservation.departureDate}</td>`;
        html += `<td>${reservation.returnDate}</td>`;
        html += `<td>${reservation.adults}</td>`;
        html += `<td>${reservation.children}</td>`;
        html += `<td>${reservation.infants}</td>`;
        html += `</tr>`;
    }

    tablaReservaciones.innerHTML = html;
}
