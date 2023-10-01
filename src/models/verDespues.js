import { Schema, model } from "mongoose";

const verDespuesSchema = new Schema({
    idPelicula: {
        type: Number,
        required: true,
    },
    idUsuario:{
        type: String,
        required: true,
    },
    tipo:{
        type: String,
        required: true,
    },
    nombrePelicula:{
        type: String,
        required: true
    }
})

const VerDespues = model('verDespues', verDespuesSchema);

export default VerDespues;