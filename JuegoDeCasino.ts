export abstract class JuegoDeCasino {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    abstract jugar(): void;
  }
  