import { JuegoDeCasino } from "./JuegoDeCasino";

export class Tragamonedas extends JuegoDeCasino {
  constructor() {
    super("Tragamonedas");
  }

  jugar() {
    console.log("Jugando a Tragamonedas...");
  }
}
