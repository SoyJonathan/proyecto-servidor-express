const express = require("express")

let tareasJson = require('./tareas.json')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Ruta para crear, editar y actualizar tareas (list-edit-router)');
})

router.post('/', (req, res) => {
  let nuevaTarea = req.body; // Obtener la tarea desde el cuerpo de la solicitud
  tareasJson.push(nuevaTarea); // Agregar nueva tarea
  console.log(tareasJson)
  res.send('Tarea creada');
});

router.delete('/', (req, res) => {
  let tareaId = req.params.id;
  let tareaIndex = tareasJson.findIndex((tarea) => tarea.id == tareaId);
  
if (tareaIndex >=0) {
  tareasJson = tareasJson.filter((tarea) => tareaId != tareaId);// utiliza el metodo filter para eliminar tarea
  console.log(tareasJson)
  res.send('Tarea eliminada');
} else {
  res.status(404).send('Tarea no encontrada')
}
});

router.put('/', (req, res) => {
  let tareaId = req.params.id;
  let tareaIndex = tareasJson.findIndex((tarea) => tarea.id == tareaId);

  if (tareaIndex >= 0) {
    let tareaActualizada = req.body;
    tareasJson = tareasJson.map((tarea) => (tarea.id == tareaId ? tareaActualizada : tarea));//Utiliza el metodo map para actualizar la tarea por ID
    res.send('Tarea Actualizada')
    console.log(tareasJson)
  } else {
    res.status(404).send('Tarea no encontrada');
  }
});

module.exports = router;