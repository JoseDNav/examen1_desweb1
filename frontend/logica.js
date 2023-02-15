function mostrarFormulario(idFormulario) {
  // Oculta todos los formularios
  document.querySelectorAll('.form-container').forEach(form => {
    form.style.display = 'none';
  });
  // Muestra el formulario correspondiente al boton presionado
  document.getElementById(idFormulario).style.display = 'block';

  
}
//cargar todos los datos
function cargaralldatos(){
  cargarDatospacientes()
  cargarDatosmedicos()
  cargarDatoscitas()
  cargarDatosexamenes()
  cargarDatosResultados()
  cargarDatosHabitaciones()
  cargarDatoshospitalizacion()

}


//datos paciente

function cargarDatospacientes() {

  var cuerpoTabla = " <thead> " +
    "<tr> " +
    "<th> Id paciente </th> " +
    "<th> Nombre </th> " +
    "<th> apellido </th> " +
    "<th> fecha nacimiento </th> " +
    "<th> direccion  </th> " +
    "<th> telefono </th> " +
    "</tr> "
    + " </thead> <tbody>";

  $.ajax({
    type: "GET",
    url: "https://desfrlopez.me/jnavarro/api/pacientes/",
    success: function (data) {

      console.log(data)
      for (var i = 0; i < data.length; i++) {

        cuerpoTabla += " <tr> " +
          "<td>" + data[i].IDPaciente + "</td>" +
          "<td>" + data[i].Nombre + "</td>" +
          "<td>" + data[i].Apellido + "</td>" +
          "<td>" + data[i].FechaNacimiento + "</td>" +
          "<td>" + data[i].Direccion + "</td>" +
          "<td>" + data[i].Telefono + "</td>" +
          "</tr>";

      }

      cuerpoTabla += " </tbody>";

      $("#tablapaciente").html(cuerpoTabla);


    },
    dataType: "json"
  });

}

function insertarDatospacientes(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    Nombre : $("#nombre_paciente").val(),
    Apellido : $("#apellido_paciente").val(),
    FechaNacimiento : $("#fecha_paciente").val(),
    Direccion : $("#direccion_paciente").val(),
    Telefono : $("#telefono_paciente").val()
  };

  var mensaje = "Insercion Exitosa";
  $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/jnavarro/api/pacientes/",
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatospacientes();

}


function actualizarDatospacientes(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    Nombre : $("#nombre_paciente").val(),
    Apellido : $("#apellido_paciente").val(),
    FechaNacimiento : $("#fecha_paciente").val(),
    Direccion : $("#direccion_paciente").val(),
    Telefono : $("#telefono_paciente").val()
  };

  let id = $("#id_paciente").val();

  var mensaje = "Actualizacion Exitosa";
  $.ajax({
      type: "PUT",
      url: "https://desfrlopez.me/jnavarro/api/pacientes/"+id,
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatospacientes();

}

function borrarDatospacientes(){

  jQuery.ajaxSetup({async:false});

  let id = $("#id_paciente").val();

  var mensaje = "Borrado Exitoso Exitoso";
  $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/jnavarro/api/pacientes/"+id,
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatospacientes();

}


//datos medico

function cargarDatosmedicos() {

  var cuerpoTabla = " <thead> " +
    "<tr> " +
    "<th> IDMedico </th> " +
    "<th> Nombre </th> " +
    "<th> apellido </th> " +
    "<th> Especialidad </th> " +
    "</tr> "
    + " </thead> <tbody>";

  $.ajax({
    type: "GET",
    url: "https://desfrlopez.me/jnavarro/api/medicos/",
    success: function (data) {

      console.log(data)
      for (var i = 0; i < data.length; i++) {

        cuerpoTabla += " <tr> " +
          "<td>" + data[i].IDMedico + "</td>" +
          "<td>" + data[i].Nombre + "</td>" +
          "<td>" + data[i].Apellido + "</td>" +
          "<td>" + data[i].Especialidad + "</td>" +
          "</tr>";

      }

      cuerpoTabla += " </tbody>";

      $("#tablamedico").html(cuerpoTabla);


    },
    dataType: "json"
  });

}

function insertarDatosmedicos(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    Nombre : $("#nombre_medico").val(),
    Apellido : $("#apellido_medico").val(),
    Especialidad : $("#especialidad").val()
  };

  var mensaje = "Insercion Exitosa";
  $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/jnavarro/api/medicos/",
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosmedicos();

}


function actualizarDatosmedicos(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    Nombre : $("#nombre_medico").val(),
    Apellido : $("#apellido_medico").val(),
    Especialidad : $("#especialidad").val()
  };

  let id = $("#id_medico").val();

  var mensaje = "Actualizacion Exitosa";
  $.ajax({
      type: "PUT",
      url: "https://desfrlopez.me/jnavarro/api/medicos/"+id,
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosmedicos();
}

function borrarDatosmedicos(){

  jQuery.ajaxSetup({async:false});

  let id = $("#id_medico").val();

  var mensaje = "Borrado Exitoso Exitoso";
  $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/jnavarro/api/medicos/"+id,
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosmedicos();

}


//datos citas

function cargarDatoscitas() {

  var cuerpoTabla = " <thead> " +
    "<tr> " +
    "<th> Id Cita </th> " +
    "<th> Fecha </th> " +
    "<th> Hora </th> " +
    "<th> IDPaciente  </th> " +
    "<th> IDMedico  </th> " +
    "</tr> "
    + " </thead> <tbody>";

  $.ajax({
    type: "GET",
    url: "https://desfrlopez.me/jnavarro/api/citas/",
    success: function (data) {

      console.log(data)
      for (var i = 0; i < data.length; i++) {

        cuerpoTabla += " <tr> " +
          "<td>" + data[i].IDCita + "</td>" +
          "<td>" + data[i].Fecha + "</td>" +
          "<td>" + data[i].Hora + "</td>" +
          "<td>" + data[i].IDPaciente + "</td>" +
          "<td>" + data[i].IDMedico + "</td>" +
          "</tr>";

      }

      cuerpoTabla += " </tbody>";

      $("#tablacitas").html(cuerpoTabla);


    },
    dataType: "json"
  });

}

function insertarDatoscitas(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    Fecha : $("#fecha_cita").val(),
    Hora : $("#hora_cita").val(),
    IDPaciente : $("#id_paciente_cita").val(),
    IDMedico : $("#id_medico_cita").val()
  };

  var mensaje = "Insercion Exitosa";
  $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/jnavarro/api/citas/",
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatoscitas();

}


function actualizarDatoscitas(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    Fecha : $("#fecha_cita").val(),
    Hora : $("#hora_cita").val(),
    IDPaciente : $("#id_paciente_cita").val(),
    IDMedico : $("#id_medico_cita").val()
  };

  let id = $("#id_cita").val();

  var mensaje = "Actualizacion Exitosa";
  $.ajax({
      type: "PUT",
      url: "https://desfrlopez.me/jnavarro/api/citas/"+id,
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatoscitas();

}

function borrarDatoscitas(){

  jQuery.ajaxSetup({async:false});

  let id = $("#id_cita").val();

  var mensaje = "Borrado Exitoso Exitoso";
  $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/jnavarro/api/citas/"+id,
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatoscitas();

}

//datos examenes

function cargarDatosexamenes() {

  var cuerpoTabla = " <thead> " +
    "<tr> " +
    "<th> Id Examen </th> " +
    "<th> Nombre </th> " +
    "<th> Descripcion </th> " +
    "<th> Costo  </th> " +
    "</tr> "
    + " </thead> <tbody>";

  $.ajax({
    type: "GET",
    url: "https://desfrlopez.me/jnavarro/api/examenes/",
    success: function (data) {

      console.log(data)
      for (var i = 0; i < data.length; i++) {

        cuerpoTabla += " <tr> " +
          "<td>" + data[i].IDExamen + "</td>" +
          "<td>" + data[i].Nombre + "</td>" +
          "<td>" + data[i].Descripcion + "</td>" +
          "<td>" + data[i].Costo + "</td>" +
          "</tr>";

      }

      cuerpoTabla += " </tbody>";

      $("#tablaexamenes").html(cuerpoTabla);


    },
    dataType: "json"
  });

}

function insertarDatosexamenes(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    Nombre : $("#nombre_examen").val(),
    Descripcion : $("#descripcion_examen").val(),
    Costo : $("#costo_examen").val()
  };

  var mensaje = "Insercion Exitosa";
  $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/jnavarro/api/examenes/",
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosexamenes();

}


function actualizarDatosexamenes(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    Nombre : $("#nombre_examen").val(),
    Descripcion : $("#descripcion_examen").val(),
    Costo : $("#costo_examen").val()
  };

  let id = $("#id_examen").val();

  var mensaje = "Actualizacion Exitosa";
  $.ajax({
      type: "PUT",
      url: "https://desfrlopez.me/jnavarro/api/examenes/"+id,
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosexamenes();

}

function borrarDatosexamenes(){

  jQuery.ajaxSetup({async:false});

  let id = $("#id_examen").val();

  var mensaje = "Borrado Exitoso Exitoso";
  $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/jnavarro/api/examenes/"+id,
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosexamenes();

}

//datos resultados de examen

function cargarDatosResultados() {

  var cuerpoTabla = " <thead> " +
    "<tr> " +
    "<th> Id Resultado </th> " +
    "<th> ID Examen </th> " +
    "<th> ID Paciente </th> " +
    "<th> Resultado  </th> " +
    "<th> Fecha  </th> " +
    "</tr> "
    + " </thead> <tbody>";

  $.ajax({
    type: "GET",
    url: "https://desfrlopez.me/jnavarro/api/resultadosexamenes/",
    success: function (data) {

      console.log(data)
      for (var i = 0; i < data.length; i++) {

        cuerpoTabla += " <tr> " +
          "<td>" + data[i].IDResultado + "</td>" +
          "<td>" + data[i].IDExamen + "</td>" +
          "<td>" + data[i].IDPaciente + "</td>" +
          "<td>" + data[i].Resultado + "</td>" +
          "<td>" + data[i].Fecha + "</td>" +
          "</tr>";

      }

      cuerpoTabla += " </tbody>";

      $("#tablaResultados").html(cuerpoTabla);


    },
    dataType: "json"
  });

}

function insertarDatosResultados(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    IDExamen : $("#id_examen_resultado").val(),
    IDPaciente : $("#id_paciente_resultado").val(),
    Resultado : $("#resultado").val(),
    Fecha : $("#fecha_resultado").val()
  };

  var mensaje = "Insercion Exitosa";
  $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/jnavarro/api/resultadosexamenes/",
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosResultados();

}


function actualizarDatosResultados(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    IDExamen : $("#id_examen_resultado").val(),
    IDPaciente : $("#id_paciente_resultado").val(),
    Resultado : $("#resultado").val(),
    Fecha : $("#fecha_resultado").val()
  };

  let id = $("#id_resultado").val();

  var mensaje = "Actualizacion Exitosa";
  $.ajax({
      type: "PUT",
      url: "https://desfrlopez.me/jnavarro/api/resultadosexamenes/"+id,
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosResultados();

}

function borrarDatosResultados(){

  jQuery.ajaxSetup({async:false});

  let id = $("#id_resultado").val();

  var mensaje = "Borrado Exitoso Exitoso";
  $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/jnavarro/api/resultadosexamenes/"+id,
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosResultados();

}

//datos habitaciones

function cargarDatosHabitaciones() {

  var cuerpoTabla = " <thead> " +
    "<tr> " +
    "<th> ID Habitacion </th> " +
    "<th> Numero </th> " +
    "<th> Tipo </th> " +
    "<th> Precio  </th> " +
    "</tr> "
    + " </thead> <tbody>";

  $.ajax({
    type: "GET",
    url: "https://desfrlopez.me/jnavarro/api/habitaciones/",
    success: function (data) {

      console.log(data)
      for (var i = 0; i < data.length; i++) {

        cuerpoTabla += " <tr> " +
        "<td>" + data[i].IDHabitacion + "</td>" +
          "<td>" + data[i].Numero + "</td>" +
          "<td>" + data[i].Tipo + "</td>" +
          "<td>" + data[i].Precio + "</td>" +
          "</tr>";

      }

      cuerpoTabla += " </tbody>";

      $("#tablaHabitaciones").html(cuerpoTabla);


    },
    dataType: "json"
  });

}

function insertarDatosHabitaciones(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    Numero : $("#numero_habitacion").val(),
    Tipo : $("#tipo_habitacion").val(),
    Precio : $("#precio_habitacion").val()
  };

  var mensaje = "Insercion Exitosa";
  $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/jnavarro/api/habitaciones/",
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosHabitaciones();

}


function actualizarDatosHabitaciones(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    Numero : $("#numero_habitacion").val(),
    Tipo : $("#tipo_habitacion").val(),
    Precio : $("#precio_habitacion").val()
  };

  let id = $("#id_habitacion").val();

  var mensaje = "Actualizacion Exitosa";
  $.ajax({
      type: "PUT",
      url: "https://desfrlopez.me/jnavarro/api/habitaciones/"+id,
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosHabitaciones();

}

function borrarDatosHabitaciones(){

  jQuery.ajaxSetup({async:false});

  let id = $("#id_habitacion").val();

  var mensaje = "Borrado Exitoso Exitoso";
  $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/jnavarro/api/habitaciones/"+id,
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatosHabitaciones();

}

//datos hospitalizacion


function cargarDatoshospitalizacion() {

  var cuerpoTabla = " <thead> " +
    "<tr> " +
    "<th> ID Hospitalizacion </th> " +
    "<th> ID Paciente </th> " +
    "<th> ID Habitacion </th> " +
    "<th> FechaEntrada  </th> " +
    "<th> FechaSalida  </th> " +
    "</tr> "
    + " </thead> <tbody>";

  $.ajax({
    type: "GET",
    url: "https://desfrlopez.me/jnavarro/api/hospitalizaciones/",
    success: function (data) {

      console.log(data)
      for (var i = 0; i < data.length; i++) {

        cuerpoTabla += " <tr> " +
        "<td>" + data[i].IDHospitalizacion + "</td>" +
          "<td>" + data[i].IDPaciente + "</td>" +
          "<td>" + data[i].IDHabitacion + "</td>" +
          "<td>" + data[i].FechaEntrada + "</td>" +
          "<td>" + data[i].FechaSalida + "</td>" +
          "</tr>";

      }

      cuerpoTabla += " </tbody>";

      $("#tablahospitalizacion").html(cuerpoTabla);


    },
    dataType: "json"
  });

}

function insertarDatoshospitalizacion(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    IDPaciente : $("#id_paciente_hospitalizacion").val(),
    IDHabitacion : $("#id_habitacion_hospitalizacion").val(),
    FechaEntrada : $("#fecha_entrada_hospitalizacion").val(),
    FechaSalida : $("#fecha_salida_hospitalizacion").val()
  };

  var mensaje = "Insercion Exitosa";
  $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/jnavarro/api/hospitalizaciones/",
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatoshospitalizacion();

}


function actualizarDatoshospitalizacion(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    IDPaciente : $("#id_paciente_hospitalizacion").val(),
    IDHabitacion : $("#id_habitacion_hospitalizacion").val(),
    FechaEntrada : $("#fecha_entrada_hospitalizacion").val(),
    FechaSalida : $("#fecha_salida_hospitalizacion").val()
  };

  let id = $("#id_hospitalizacion").val();

  var mensaje = "Actualizacion Exitosa";
  $.ajax({
      type: "PUT",
      url: "https://desfrlopez.me/jnavarro/api/hospitalizaciones/"+id,
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatoshospitalizacion();

}

function borrarDatoshospitalizacion(){

  jQuery.ajaxSetup({async:false});

  let id = $("#id_hospitalizacion").val();

  var mensaje = "Borrado Exitoso Exitoso";
  $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/jnavarro/api/hospitalizaciones/"+id,
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatoshospitalizacion();

}
