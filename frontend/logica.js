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

function insertarcitas(){

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

function borrarDatospacientes(){

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