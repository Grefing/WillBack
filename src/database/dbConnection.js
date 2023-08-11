import { connect } from "mongoose";
import { MONGODB_URI } from "../../config";

connect(MONGODB_URI).then((res) =>{
    console.log(`DB conectada en ${res.connection.name}`);
}).catch((e) => {
    console.log(e);
})