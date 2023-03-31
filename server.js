const express = require("express")
const app = express()

const tareas = [
  {
    "id":"123456",
    "isCompleted":false,
    "description":"Walk the dog",
  },
  {
    "id":"789101",
    "isCompleted":false,
    "description":"Doing homework",
  },
  {
    "id":"212226",
    "isCompleted":false,
    "description":"sweep the floor",
  }
]

app.use(express.json())

app.get("/", (req, res) => {
  res.json(tareas)
})

app.listen(8080, () => {
  console.log("Listening to port 8080")
})

