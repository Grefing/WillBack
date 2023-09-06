import { Schema, model } from "mongoose"


const comentSchema = new Schema({
    idPelicula:{
        type: Number,
        required: true,
    },
    idUsuario:{
        type: String,
        required: true,
    },
    nombreUsuario:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
})

const Comentario = model("comentario", comentSchema);

export default Comentario;