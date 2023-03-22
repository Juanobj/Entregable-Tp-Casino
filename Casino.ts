import { JuegoDeCasino } from "./JuegoDeCasino";
import { Dados } from "./Dados";
import { Tragamonedas } from "./Tragamonedas";
import { Ruleta } from "./Ruleta";

export class Casino {
  jugarTodos() {
      throw new Error("Method not implemented.");
  }
  agregarJuego(arg0: Tragamonedas) {
      throw new Error("Method not implemented.");
  }
  juegos: JuegoDeCasino[];

  constructor() {
    this.juegos = [new Dados(), new Tragamonedas(), new Ruleta()];
  }

  jugar() {
    for (let juego of this.juegos) {
      juego.jugar();
    }
  }
}
