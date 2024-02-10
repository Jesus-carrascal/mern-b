const express = require("express");
const app = express();

//conexion mongoDB
const archivoDB = require("./conexion");

//configuracion de rutas y modelo solicitudes
const rutasolicitud = require("./rutas/solicitud");

//importar body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

app.use("/api/solicitud", rutasolicitud);

app.get("/", (req, res) => {
  res.end("Bienvenido, servidor corriendo...");
});


app.listen(5000, () => {
  console.log("El servidor esta funcionando correctamente");
});
