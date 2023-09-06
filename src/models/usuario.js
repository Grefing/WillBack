import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        minLength: 3,
        maxLength: 16,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        minLength: 2,
        maxLength: 40,
        required: true,
        unique: true
    },
    password:{
        type: String,
        minLength: 8,
        required: true,
    }
});

const Usuario = model('usuario', usuarioSchema);

export default Usuario;