import { JuegoDeCasino } from "./JuegoDeCasino";

export class Dados extends JuegoDeCasino {
  constructor() {
    super("Dados");
  }

  jugar() {
    console.log("Jugando a Dados...");
  }
}
