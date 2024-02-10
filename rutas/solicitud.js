const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaSolicitud = new eschema({
  nombre: String,
  curso: String,
  tipo: String,
  idsolicitud: String,
});

const ModeloSolicitud = mongoose.model("solicitudes", eschemaSolicitud);
module.exports = router;

router.post("/agregarsolicitud", (req, res) => {
  const nuevasolicitud = new ModeloSolicitud({
    nombre: req.body.nombre,
    curso: req.body.curso,
    tipo: req.body.tipo,
    idsolicitud: req.body.idsolicitud,
  });
  nuevasolicitud
    .save()
    .then((result) => {
      res.send("Solicitud agregada correctamente");
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/obtenersolicitudes", (req, res) => {
  ModeloSolicitud.find({})
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/obtenerdatasolicitud/:id", (req, res) => {
  const id = req.params.id;
  ModeloSolicitud.findById({ _id: id })
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/actualizarsolicitud/:id", (req, res) => {
  const id = req.params.id;
  ModeloSolicitud.findByIdAndUpdate(
    { _id: id },
    {
      nombre: req.body.nombre,
      curso: req.body.curso,
      tipo: req.body.tipo,
    }
  )
    .then((result) => {
      res.send("Solicitud actualizada");
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/borrarsolicitud/:id", (req, res) => {
  const id = req.params.id;

  ModeloSolicitud.findByIdAndDelete({ _id: id })
    .then((res) => {
      res.send("Solicitud borrada");
      console.log(res.send);
    })
    .catch((err) => {
      res.send(err);
    });
});
