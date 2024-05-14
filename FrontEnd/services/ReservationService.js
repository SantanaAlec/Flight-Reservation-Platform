//Imports
import { Reservation } from "../models/reservation.js";

//get values from html elements
var origenDestino = document.getElementById("orgInput");
var orgDestInput = document.getElementById("destInput");
var numAdultos = document.getElementById("numAdultos");
var numNinos = document.getElementById("numNinios");
var numInfantes = document.getElementById("numInfantes");

var fechaPartida = document.getElementById("fechaPartida");
var fechaRegreso = document.getElementById("fechaRegreso");

var reservaButton = document.getElementById("reservaButton");
reservaButton.addEventListener("click", createReservation);

var reservationsLocal = [];

//Functions
function createReservation() {
    console.log("Creating Reservation");

    //show variables
    console.log(origenDestino.value);
    console.log(orgDestInput.value);
    console.log(fechaPartida.value);
    console.log(fechaRegreso.value);
    console.log(numAdultos.value);
    console.log(numNinos.value);
    console.log(numInfantes.value);

    //Validate if all fields are filled
    if (
        origenDestino.value == null ||
        origenDestino.value == "" ||
        orgDestInput.value == null ||
        orgDestInput.value == "" ||
        fechaPartida.value == null ||
        fechaPartida.value == "" ||
        fechaRegreso.value == null ||
        fechaRegreso.value == ""
    ) {
        alert("Por favor llene todos los campos");
        return;
    }

    let seatAdult = parseInt(numAdultos.value);
    let seatKids = parseInt(numNinos.value);
    let seatToodler = parseInt(numInfantes.value);

    if (seatAdult == 0 && seatKids == 0 && seatToodler == 0) {
        alert(
            "Por favor ingrese al menos un asiento de adulto, niño o infante"
        );
        return;
    }

    //
    if (isNaN(seatAdult)) {
        seatAdult = 0;
    }

    if (isNaN(seatKids)) {
        seatKids = 0;
    }

    if (isNaN(seatToodler)) {
        seatToodler = 0;
    }

    //Create reservation model as json
    let reservation = new Reservation(
        origenDestino.value,
        orgDestInput.value,
        fechaPartida.value,
        fechaRegreso.value,
        seatAdult,
        seatKids,
        seatToodler
    );

    //Add reservation to reservations array and empty the form
    reservationsLocal.push(reservation);
    clearReservationForm();

    //Send reservation to backend with ajax
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:3000/api/reservations", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            //Redirect to flights page
            window.location.href = "flightsPage.html";
        }
    };

    xhr.send(JSON.stringify(reservation));
}

function clearReservationForm() {
    console.log("Clearing Reservation Form");
    origenDestino.value = "";
    orgDestInput.value = "";
    numAdultos.value = "";
    numNinos.value = "";
    numInfantes.value = "";
    fechaPartida.value = "";
    fechaRegreso.value = "";
}
