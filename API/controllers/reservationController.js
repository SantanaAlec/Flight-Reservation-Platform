const ReservationDAO = require("../dataAccess/reservationDAO");
const { AppError } = require("../utils/appError");

class ReservationController {
    static async createReservation(req, res, next) {
        try {
            const {
                origin,
                destination,
                departureDate,
                returnDate,
                adults,
                children,
                infants,
            } = req.body;

            const validate = "";

            if (!origin) {
                validate += "Origin is required\n";
            }

            if (!destination) {
                validate += "Destination is required\n";
            }

            if (!departureDate) {
                validate += "Departure Date is required\n";
            }

            if (!returnDate) {
                validate += "Return Date is required\n";
            }

            if (!adults && !children && !infants) {
                validate += "At least one seat is required\n";
            }

            if (validate != "") {
                return next(new AppError(validate, 400));
            }

            if (isNaN(adults)) {
                adults = 0;
            }

            if (isNaN(children)) {
                children = 0;
            }

            if (isNaN(infants)) {
                infants = 0;
            }

            const reservation = await ReservationDAO.createReservation(
                origin,
                destination,
                departureDate,
                returnDate,
                adults,
                children,
                infants
            );
            res.status(201).json(reservation);
        } catch (error) {
            console.log(error);
            next(new AppError("Error creating reservation", 500));
        }
    }

    static async getAllReservations(req, res, next) {
        try {
            const reservations = await ReservationDAO.getAllReservations();
            res.status(200).json(reservations);
        } catch (error) {
            next(new AppError("Error getting reservations", 500));
        }
    }

    static async getReservationById(req, res, next) {
        try {
            const id = req.params.id;
            const reservation = await ReservationDAO.getReservationById(id);
            if (!reservation) {
                return next(new AppError("Reservation not found", 404));
            }
            res.status(200).json(reservation);
        } catch (error) {
            next(new AppError("Error getting reservation", 500));
        }
    }

    static async updateReservation(req, res, next) {
        try {
            const {
                id,
                origin,
                destination,
                departureDate,
                returnDate,
                adults,
                children,
                infants,
            } = req.body;
            if (
                !id ||
                !origin ||
                !destination ||
                !departureDate ||
                !returnDate ||
                !adults ||
                !children ||
                !infants
            ) {
                return next(
                    new AppError(
                        "Missing required fields (ID, Origen, Destino, Fecha de salida, Fecha de regreso, Adultos, Niños, Bebés)",
                        400
                    )
                );
            }
            const reservation = await ReservationDAO.updateReservation(
                id,
                origin,
                destination,
                departureDate,
                returnDate,
                adults,
                children,
                infants
            );
            res.status(200).json(reservation);
        } catch (error) {
            next(new AppError("Error updating reservation", 500));
        }
    }

    static async deleteReservation(req, res, next) {
        try {
            const id = req.params.id;
            const reservation = await ReservationDAO.deleteReservation(id);
            if (!reservation) {
                return next(new AppError("Reservation not found", 404));
            }
            res.status(200).json(reservation);
        } catch (error) {
            next(new AppError("Error deleting reservation", 500));
        }
    }
}

module.exports = ReservationController;
