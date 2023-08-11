import { Schema, model } from "mongoose";

const likeSchema = new Schema({
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
}
});

const Like = model("like", likeSchema);

export default Like;