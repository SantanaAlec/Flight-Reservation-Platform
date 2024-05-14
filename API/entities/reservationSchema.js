const EntitySchema = require("typeorm").EntitySchema;
const Reservation = require("../models/reservation").Reservation;

module.exports = new EntitySchema({
    name: "Reservation",
    target: Reservation,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        origin: {
            type: "varchar",
        },
        destination: {
            type: "varchar",
        },
        departureDate: {
            type: "date",
        },
        returnDate: {
            type: "date",
        },
        adults: {
            type: "int",
        },
        children: {
            type: "int",
        },
        infants: {
            type: "int",
        },
    },
});
