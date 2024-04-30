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

//Functions
function createReservation() {
    console.log("Creating Reservation");

    var reservations = [];

    if (
        !(
            origenDestino.value == "" ||
            orgDestInput.value == "" ||
            fechaPartida.value == "" ||
            fechaRegreso.value == ""
        )
    ) {
        if (
            !(
                numAdultos.value == "" &&
                numInfantes.value == "" &&
                numNinos.value == ""
            )
        ) {
            //Create reservation model as json
            var reservation = new Reservation(
                origenDestino.value,
                orgDestInput.value,
                fechaPartida.value,
                fechaRegreso.value,
                parseInt(numAdultos.value),
                parseInt(numNinos.value),
                parseInt(numInfantes.value)
            );

            //Add reservation to reservations array and empty the form
            reservations.push(reservation);
            clearReservationForm();
        } else {
            alert(
                "Por favor ingrese al menos un asiento de adulto, niño o infante"
            );
        }
    } else {
        alert("Por favor llene todos los campos");
    }

    //save in localstore
    localStorage.setItem("reservation", JSON.stringify(reservation));
}

function getReservation() {
    console.log("Getting Reservation");
    //get reservation from localstore
    var reservation = JSON.parse(localStorage.getItem("reservation"));
    //return reservation
    return reservation;
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
