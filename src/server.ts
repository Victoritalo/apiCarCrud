import express from "express"
import cors from 'cors';
import { CarController } from "./controllers/carro.controller";

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.json({ message: "server is running" }))


const carro = new CarController();

app.post('/carro', carro.create);
// app.get('/carro', carro.list);
// app.get('/carro/:id', carro.getByUid);
app.delete('/carro/:id', carro.remove);
// app.put('/carro/:id', carro.update);

app.listen(3333, () => console.log("Server is running"))