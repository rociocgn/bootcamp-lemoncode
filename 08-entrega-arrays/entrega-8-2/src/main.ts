// ENTREGA 8.2. SOFTWARE HOSPITALARIO, LISTA DE PACIENTES
type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1. Filtrar por especialidad
// a) Pacientes asigandos a "Pediatría"

const pediatriaPacientes = pacientes.filter((paciente) => paciente.especialidad === "Pediatra");

console.log("Pacientes asignados a Pediatría:", pediatriaPacientes);

// b) Pacientes asigandos a "Pediatría" y que tengan una edad menor a 10 años

const pediatriaMenores10 = pacientes.filter((paciente)=> paciente.especialidad === "Pediatra" && paciente.edad < 10);

console.log("Pacientes asignados a Pediatría y menores de 10 años:", pediatriaMenores10);


// Apartado 2. Identificar ALGÚN paciente con ritmo cardiaco superior a 100 pulsaciones por minuto y temperatura superior a 39 grados

  const activacionProtocolo = pacientes.some((paciente) : boolean => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39);

  console.log("¿Algún paciente tiene ritmo cardiaco superior a 100 pulsaciones por minuto y temperatura superior a 39 grados?", activacionProtocolo);
 

  // Apartado 3. Reasignar los pacientes asignados a "Pediatría" a "Medico de familia". MAP

  const reasignacionPediatria = pacientes.map((paciente) => 
  paciente.especialidad === "Pediatra"
    ? { ...paciente, especialidad: "Medico de familia" }
    : paciente
);

  console.log("Pacientes después de reasignar Pediatría a Médico de familia:", reasignacionPediatria);


  // Apartado 4. Comprobar si en la lista hay algún paciente asignado a "Pediatría" o podemos enviar al pediatra a casa. SOME

  const hayPediatria = pacientes.some((paciente) => paciente.especialidad === "Pediatra");

  console.log("¿Hay algún paciente asignado a Pediatría?", hayPediatria);


  // Apartado 5. Calcular el total de pacientes asigandos a cada una de las especialidades. REDUCE

  interface NumeroPacientesPorEspecialidad { 
    medicoDeFamilia: number; 
    pediatria: number; 
    cardiologia: number; 
  }

  const totalPacientesPorEspecialidad = (pacientes : Pacientes[]) => {
    return pacientes.reduce((total, paciente) => {
      if (paciente.especialidad === "Medico de familia") {
        total.medicoDeFamilia ++;
      } else if (paciente.especialidad === "Pediatra") {
        total.pediatria ++;
      } else if (paciente.especialidad === "Cardiólogo") {
        total.cardiologia ++;
      }
      return total;
    }, { 
      medicoDeFamilia: 0, 
      pediatria: 0, 
      cardiologia: 0 
    });
  };
    
  console.log("Total de pacientes por especialidad:", totalPacientesPorEspecialidad(pacientes));
