const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

//-------------------------------------tabla pacientes----------------------------------------------------------------------------------------------------------------------------------------------


app.get('/api/pacientes/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from pacientes";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/pacientes/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from pacientes where IDPaciente = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/pacientes/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "insert into pacientes " +
            " (Nombre, Apellido, FechaNacimiento , Direccion, Telefono) " +
            " values (?, ?, ?, ?, ?)";
    
    let parametros = [  req.body.Nombre,
                        req.body.Apellido,
                        req.body.FechaNacimiento,
                        req.body.Direccion,
                        req.body.Telefono
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );

app.put('/api/pacientes/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "update pacientes set Nombre = ?, " +
                " Apellido = ?,  "+
                " FechaNacimiento = ?,  "+
                " Direccion = ?,  "+
                " Telefono = ?  "+
                " where IDPaciente = ?";

    let parametros = [  req.body.Nombre, 
                        req.body.Apellido,
                        req.body.FechaNacimiento,
                        req.body.Direccion,
                        req.body.Telefono,
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/pacientes/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "delete from pacientes where IDPaciente = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});


//-------------------------------------tabla Medicos----------------------------------------------------------------------------------------------------------------------------------------------

app.get('/api/medicos/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from medicos";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/medicos/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from medicos where IDMedico = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/medicos/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "insert into medicos " +
            " (Nombre, Apellido, Especialidad) " +
            " values (?, ?, ?)";
    
    let parametros = [  req.body.Nombre,
                        req.body.Apellido,
                        req.body.Especialidad
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );

app.put('/api/medicos/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "update medicos set Nombre = ?, " +
                " Apellido = ?,  "+
                " Especialidad = ?  "+
                " where IDMedico = ?";

    let parametros = [  req.body.Nombre, 
                        req.body.Apellido,
                        req.body.Especialidad, 
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/medicos/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "delete from medicos where IDMedico = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

//-------------------------------------tabla Citas----------------------------------------------------------------------------------------------------------------------------------------------

app.get('/api/citas/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from citas";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/citas/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from citas where IDCita = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/citas/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "insert into citas " +
            " (Fecha, Hora, IDPaciente, IDMedico) " +
            " values (?, ?, ?, ?)";
    
    let parametros = [  req.body.Fecha,
                        req.body.Hora,
                        req.body.IDPaciente,
                        req.body.IDMedico
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );

app.put('/api/citas/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "update citas set Fecha = ?, " +
                " Hora = ?,  "+
                " IDPaciente = ?,  "+
                " IDMedico = ?  "+
                " where IDCita = ?";

    let parametros = [  req.body.Fecha,
                        req.body.Hora,
                        req.body.IDPaciente,
                        req.body.IDMedico, 
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/citas/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "delete from citas where IDCita = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

//-------------------------------------tabla Examenes----------------------------------------------------------------------------------------------------------------------------------------------

app.get('/api/examenes/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from examenes";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/examenes/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from examenes where IDExamen = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/examenes/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "insert into examenes " +
            " (Nombre, Descripcion, Costo) " +
            " values (?, ?, ?)";
    
    let parametros = [  req.body.Nombre,
                        req.body.Descripcion,
                        req.body.Costo
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );

app.put('/api/examenes/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "update examenes set Nombre = ?, " +
                " Descripcion = ?,  "+
                " Costo = ?  "+
                " where IDExamen = ?";

    let parametros = [  req.body.Nombre,
                        req.body.Descripcion,
                        req.body.Costo,
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/examenes/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "delete from examenes where IDExamen = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

//-------------------------------------tabla resultados Examenes----------------------------------------------------------------------------------------------------------------------------------------------

app.get('/api/resultadosexamenes/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from resultadosexamenes";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/resultadosexamenes/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from resultadosexamenes where IDResultado = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/resultadosexamenes/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "insert into resultadosexamenes " +
            " (IDExamen, IDPaciente, Resultado, Fecha) " +
            " values (?, ?, ?, ?)";
    
    let parametros = [  req.body.IDExamen,
                        req.body.IDPaciente,
                        req.body.Resultado,
                        req.body.Fecha
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );

app.put('/api/resultadosexamenes/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "update resultadosexamenes set IDExamen = ?, " +
                " IDPaciente = ?,  "+
                " Resultado = ?,  "+
                " Fecha = ?  "+
                " where IDResultado = ?";

    let parametros = [  req.body.IDExamen,
                        req.body.IDPaciente,
                        req.body.Resultado,
                        req.body.Fecha,
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/resultadosexamenes/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "delete from resultadosexamenes where IDResultado = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

//-------------------------------------tabla Habitaciones----------------------------------------------------------------------------------------------------------------------------------------------

app.get('/api/habitaciones/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from habitaciones";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/habitaciones/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from habitaciones where IDHabitacion = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/habitaciones/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "insert into habitaciones " +
            " (Numero, Tipo, Precio) " +
            " values (?, ?, ?)";
    
    let parametros = [  req.body.Numero,
                        req.body.Tipo,
                        req.body.Precio
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );

app.put('/api/habitaciones/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "update habitaciones set Numero = ?, " +
                " Tipo = ?,  "+
                " Precio = ?  "+
                " where IDHabitacion = ?";

    let parametros = [  req.body.Numero,
                        req.body.Tipo,
                        req.body.Precio,
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/habitaciones/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "delete from habitaciones where IDHabitacion = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

//-------------------------------------tabla Hospitalizaciones----------------------------------------------------------------------------------------------------------------------------------------------

app.get('/api/hospitalizaciones/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from hospitalizaciones";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/hospitalizaciones/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "select * from hospitalizaciones where IDHospitalizacion = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/hospitalizaciones/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "insert into hospitalizaciones " +
            " (IDPaciente, IDHabitacion, FechaEntrada, FechaSalida) " +
            " values (?, ?, ?, ?)";
    
    let parametros = [  req.body.IDPaciente,
                        req.body.IDHabitacion,
                        req.body.FechaEntrada,
                        req.body.FechaSalida
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );

app.put('/api/hospitalizaciones/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "update hospitalizaciones set IDPaciente = ?, " +
                " IDHabitacion = ?,  "+
                " FechaEntrada = ?,  "+
                " FechaSalida = ?  "+
                " where IDHospitalizacion = ?";

    let parametros = [  req.body.IDPaciente,
                        req.body.IDHabitacion,
                        req.body.FechaEntrada,
                        req.body.FechaSalida,
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/hospitalizaciones/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123",
        database: "hospital"
    });

    let sql = "delete from hospitalizaciones where IDHospitalizacion = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.listen(3000);
