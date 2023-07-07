const express = require('express');
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());


app.get("/", (req, res)=>{
  res.send("el servidor esta corriendo correctamente")
})

// Función de autenticación de token
function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  // Verificar la validez del token
  jwt.verify(token, (err, user) => {
    if (err) {
      res.status(401).json({ error: 'Unauthorized' }); // Autenticación fallida
    } else {
      // Almacenar la información del usuario en req.user
      req.user = user;
      next(); // Autenticación exitosa, continuar
    }
  });
}

app.use('/tasks/edit', authenticateToken);

app.use('/tasks/view', listViewRouter);
app.use('/tasks/edit', listEditRouter);

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});