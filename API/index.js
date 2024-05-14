const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { globalErrorHandler, AppError } = require("./utils/appError");
require("dotenv").config({ path: "./variables.env" });

const connection = require("./config/typeORM");

// Rutas importadas
const reservationRouter = require("./routes/reservationRouter");

const app = express();

app.use(express.json());
app.use(morgan("combined"));
//Allow my frontend to connect to my backend
var corsOptions = {
    origin: "http://127.0.0.1:5500",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Rutas
app.use("/api/reservations", reservationRouter);

app.all("*", (req, res, next) => {
    const error = new AppError(
        `No se encontro la ruta: ${req.originalUrl} en el servicio web`,
        404
    );
    next(error);
});

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;

connection.initialize().then(function () {
    app.listen(port, () => {
        console.log(`servidor escuchando puerto: ${port}`);
    });
});
