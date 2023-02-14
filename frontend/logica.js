function mostrarFormulario(idFormulario) {
    // Oculta todos los formularios
    document.querySelectorAll('.form-container').forEach(form => {
      form.style.display = 'none';
    });
    // Muestra el formulario correspondiente al boton presionado
    document.getElementById(idFormulario).style.display = 'block';
  }