import Like from "../models/like";

export const crearLike = async (req, res) =>{
 try {
    const likeNuevo = new Like(req.body);
    await likeNuevo.save();

    res.status(201).json({
        mensaje: "Like :)",
        id: likeNuevo.id,
    })
 } catch (e) {
    console.log(e);
    res.status(404).json({  
        mensaje: "Error al likear :("
    })
 }
}

export const obtenerLike = async (req, res) =>{
try {
    const idUsuario = req.params.idUsuario

    const like = await Like.find({ idUsuario })
    res.status(200).json(like)

} catch (e) {
    console.log(e);
    res.status(404).json({
        mensaje: "Error al obtener like"
    })
}
}

export const obtenerLikeId = async (req, res) =>{
  try {
  
      const like = await Like.findById(req.params.id)
      res.status(200).json(like)
  
  } catch (e) {
      console.log(e);
      res.status(404).json({
          mensaje: "Error al obtener like"
      })
  }
  }
  

export const obtenerLikes = async (req, res) => {
    try {
      const likes = await Like.find();
      res.status(200).json(likes);
    } catch (e) {
      console.log(e);
      res.status(404).json({
        mensaje: "Error al obtener los likes",
      });
    }
  };

export const borrarLike = async (req, res) =>{
  try {
    await Like.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Like eliminado con exito",
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al eliminar el like",
    });
  }
}