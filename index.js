import express from "express";
import cors from 'cors'; 
import morgan from "morgan";
import path from "path";
import './src/database/dbConnection'
import usuariosRouter from "./src/routes/usuarios.routes";
import likesRouter from "./src/routes/likes.routes";
import verDespuesRouter from "./src/routes/verDespues.routes";

const app = express();

// SETEO DEL PUERTO
app.set('port', process.env.PORT || 4002);
app.listen(app.get('port'), () =>{
    console.log('Estoy en el puerto '+app.get('port'));
})

// MIDDLEWARES
app.use(cors());
app.use(express.json()); 
app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname, '/public'))); 

// RUTAS

// http://localhost:4002/will/auth
app.use('/will/auth', usuariosRouter);
// http://localhost:4002/will/like
app.use('/will/like', likesRouter)
// http://localhost:4002/will/seeLater
app.use('/will/seeLater', verDespuesRouter)


