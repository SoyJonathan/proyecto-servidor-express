const express = require("express")

const app = express();

const mostrarTarea = require('./list-view-router')
const editarTarea = require('./list-edit-router')

app.get('/', (req, res) => {
  res.send("Servidor con Express");
})

app.use(express.json());
app.use('/mostrarTarea', mostrarTarea);
app.use('/editarListaTarea', editarTarea);

app.listen(8080, () => {
  console.log('Servidor corriendo en el puerto 8080')
});