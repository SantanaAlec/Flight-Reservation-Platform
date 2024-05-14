export class Reservation {
    constructor(origin, destination, departureDate, returnDate, adults, children, infants) {
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
        this.returnDate = returnDate;
        this.adults = adults;
        this.children = children;
        this.infants = infants;
    }
}