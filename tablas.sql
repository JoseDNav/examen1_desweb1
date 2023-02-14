CREATE TABLE pacientes (
   IDPaciente int auto_increment PRIMARY KEY,
   Nombre varchar(200),
   Apellido varchar(200),
   FechaNacimiento date,
   Direccion varchar(200),
   Telefono varchar(200)
);

CREATE TABLE medicos (
   IDMedico int auto_increment PRIMARY KEY,
   Nombre varchar(200),
   Apellido varchar(200),
   Especialidad varchar(200)
);

CREATE TABLE citas (
   IDCita int auto_increment PRIMARY KEY,
   Fecha date NOT NULL,
   Hora time NOT NULL,
   IDPaciente int,
   IDMedico int,
   FOREIGN KEY (IDPaciente) REFERENCES pacientes(IDPaciente),
   FOREIGN KEY (IDMedico) REFERENCES medicos(IDMedico)
);

CREATE TABLE examenes (
   IDExamen int auto_increment PRIMARY KEY,
   Nombre varchar(200) NOT NULL,
   Descripcion varchar(200) NOT NULL,
   Costo decimal NOT NULL
);

CREATE TABLE resultadosexamenes (
   IDResultado int auto_increment PRIMARY KEY,
   IDExamen int NOT NULL,
   IDPaciente int NOT NULL,
   Resultado varchar(200) NOT NULL,
   Fecha date NOT NULL,
   FOREIGN KEY (IDExamen) REFERENCES examenes(IDExamen),
   FOREIGN KEY (IDPaciente) REFERENCES pacientes(IDPaciente)
);

CREATE TABLE habitaciones (
   IDHabitacion int auto_increment PRIMARY KEY,
   Numero varchar(200) NOT NULL,
   Tipo varchar(200) NOT NULL,
   Precio decimal NOT NULL
);

CREATE TABLE hospitalizaciones (
   IDHospitalizacion int auto_increment PRIMARY KEY,
   IDPaciente int NOT NULL,
   IDHabitacion int NOT NULL,
   FechaEntrada date NOT NULL,
   FechaSalida date NOT NULL,
   FOREIGN KEY (IDPaciente) REFERENCES Pacientes(IDPaciente),
   FOREIGN KEY (IDHabitacion) REFERENCES Habitaciones(IDHabitacion)
);
