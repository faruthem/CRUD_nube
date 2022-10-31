import {config} from 'dotenv';
config();

//console.log();
//export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/CRUD"
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://prueba-nube-cont:7ImYNchXA1RNf0mHemkSf0EIdKuVRC33XVu6YjutL4C0HSflnu5AzMkqLsOhBogwnMVsIyB9sq0oXavlL2nDMA==@prueba-nube-cont.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@prueba-nube-cont@"

export  const PORT = process.env.PORT || 3000;