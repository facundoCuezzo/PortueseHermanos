const express= require ('express');
const mysql2 = require('mysql2');
const util = require('util');
const cors = require ('cors');

const app = express();
const port = 5000;

app.use(express.json());

app.use(cors());

// concexion con la base de datos
const conexion = mysql2.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345678',
    database: 'portuesehnos'

});

conexion.connect((error)=>{
    if(error){
        throw error
    };
    console.log('conexión con la base de datos EXITOSA!!');
});


app.get('/productos', async(req, res)=>{

    try{
        const query = 'SELECT * FROM productos';
        const respuesta = await qy (query);
        res.send({'respuesta': respuesta});
        console.log(respuesta)

    }
    catch (e) {
        console.error(e.message);
        res.status(413).send ({"Error": e.message});

    }
});

const qy = util.promisify(conexion.query).bind(conexion);

app.listen(port, ()=>{ console.log('servido corriendo en el puerto', port)});