const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sena');

const objetodb = mongoose.connection

objetodb.on("connected", () => {console.log("Conexion correcta a MongoDB")})
objetodb.on("error", () => {console.log("Error en la conexion a MongoDB")})

module.exports = mongoose;

