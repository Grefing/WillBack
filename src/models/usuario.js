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
    },
    fotoPerfil:{
        type: String, 
        default: 'https://static.vecteezy.com/system/resources/previews/008/844/895/non_2x/user-icon-design-free-png.png'
    }
});

const Usuario = model('usuario', usuarioSchema);

export default Usuario;