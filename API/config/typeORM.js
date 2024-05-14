const typeorm = require("typeorm");

require("dotenv").config({ path: "./variables.env" });

const connection = new typeorm.DataSource({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [require("../entities/reservationSchema")],
});

module.exports = connection;