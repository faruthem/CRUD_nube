import { connect } from "mongoose";
(async()=>{
    try {
        const db = await connect("mongodb+srv://usuario:clave@cluster0.2bbaoni.mongodb.net/crud")
        //const db = await connect("mongodb://localhost/crud")
        //const db = await connect("mongodb://mongo/crud")
        console.log("BASE DE DATOS CONECTADA A", db.connection.name)
    } catch (error) {
        console.log(error);
    }    
})()