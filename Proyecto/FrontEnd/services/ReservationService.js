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

var reservations = [];

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

    var seatAdult = parseInt(numAdultos.value);
    var seatKids = parseInt(numNinos.value);
    var seatToodler = parseInt(numInfantes.value);

    if (
        seatAdult == 0 &&
        seatKids == 0 &&
        seatToodler == 0
    ) {
        alert(
            "Por favor ingrese al menos un asiento de adulto, niño o infante"
        );
        return;
    }

    //Create reservation model as json
    var reservation = new Reservation(
        origenDestino.value,
        orgDestInput.value,
        fechaPartida.value,
        fechaRegreso.value,
        seatAdult,
        seatKids,
        seatToodler
    );

    //Add reservation to reservations array and empty the form
    reservations.push(reservation);
    clearReservationForm();

    //save in localstore
    localStorage.setItem("reservation", JSON.stringify(reservation));
    console.log("Reservation Created");
    console.log(reservation);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    console.log(reservations);
}

function getReservation() {
    console.log("Getting Reservation");
    //get reservation from localstore
    var reservation = JSON.parse(localStorage.getItem("reservation"));
    //return reservation
    return reservation;
}

function getReservations() {
    console.log("Getting Reservations");
    //get reservations from localstore
    var reservations = JSON.parse(localStorage.getItem("reservations"));
    //return reservations
    return reservations;
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
