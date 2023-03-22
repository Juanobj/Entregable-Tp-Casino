import { JuegoDeCasino } from "./JuegoDeCasino";

export class Ruleta extends JuegoDeCasino {
  constructor() {
    super("Ruleta");
  }

  jugar() {
    console.log("Jugando a Ruleta...");
  }
}
