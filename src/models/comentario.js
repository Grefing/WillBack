import { Schema, model } from "mongoose";


const comentSchema = new Schema({
    idPelicula: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    hora: {
        type: Date, 
        default: Date.now,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "usuario"
    }
});



const Comentario = model("comentario", comentSchema);


export default Comentario;