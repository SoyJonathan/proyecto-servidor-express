const express = require("express")
let tareaJson = require('./tareas.json')

const router = express.Router()

router.get('/', (req, res) => {
  res.send(tareaJson);
});

router.get('/completadas', (req, res) => {
  let completadas = tareaJson.filter((tarea) => tarea.isCompleted === true)
  res.send(completadas)
})

router.get('/incompletas', (req, res) => {
  let incompletas = tareaJson.filter((tarea) => tarea.isCompleted === false)
  res.send(incompletas)
})

module.exports = router