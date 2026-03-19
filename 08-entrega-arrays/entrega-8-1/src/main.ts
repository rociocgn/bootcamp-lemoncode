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


// Apartado 1
// a)
    const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
        let resultado: Pacientes[] = [];

        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].especialidad === "Pediatra") {
             resultado = [...resultado, pacientes[i]];
            }
        }

        return resultado;
    };

// b)
    const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
        let resultado: Pacientes[] = [];

        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
            resultado = [...resultado, pacientes[i]];
            }
        }

        return resultado;
    };

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if ( pacientes[i].temperatura > 39 && pacientes[i].frecuenciaCardiaca > 100) {
      activarProtocolo = true;
      break;
    }
  }

  return activarProtocolo;
};

// Apartado 3
/* Reasignar de Pediatría a Médico de familia por ausencia del pediatra */

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {

  let cambioEspecialidad: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      const pacienteModificado: Pacientes = {
        ...pacientes[i],
        especialidad: "Medico de familia",
      };

      cambioEspecialidad = [...cambioEspecialidad, pacienteModificado];
    } else {
      cambioEspecialidad = [...cambioEspecialidad, pacientes[i]];
    }
  }

  return cambioEspecialidad;
};

    // Apartado 4 

    const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
        let algunPediatra = false;

        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].especialidad === "Pediatra") {
                algunPediatra = true;
                break;
            }
        }

        return algunPediatra;
    };
    
    
    // Apartado 5

    interface NumeroPacientesPorEspecialidad {
        medicoDeFamilia: number;
        pediatria: number;
        cardiologia: number;
    }

    const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {

        // Inicializamos los contadores
        let contador: NumeroPacientesPorEspecialidad = {
            medicoDeFamilia: 0,
            pediatria: 0,
            cardiologia: 0,
        };

        // Recorremos la lista
        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].especialidad === "Medico de familia") {
            contador.medicoDeFamilia += 1;
            } else if (pacientes[i].especialidad === "Pediatra") {
            contador.pediatria += 1;
            } else if (pacientes[i].especialidad === "Cardiólogo") {
            contador.cardiologia += 1;
            }
        }

        return contador;
    };