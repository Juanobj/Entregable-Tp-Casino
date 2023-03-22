import { Ruleta } from "./Ruleta";
import { Tragamonedas } from "./Tragamonedas";
import { Dados } from "./Dados";

class Casino {
  private juegos: any[];

  constructor() {
    this.juegos = [];
  }

  public agregarJuego(juego: any): void {
    this.juegos.push(juego);
  }

  public mostrarJuegos(): void {
    console.log("Juegos disponibles:");
    this.juegos.forEach((juego) => {
      console.log(juego.nombre);
    });
  }
}

const casino = new Casino();
const ruleta = new Ruleta();
const tragamonedas = new Tragamonedas();
const dados = new Dados();

casino.agregarJuego(ruleta);
casino.agregarJuego(tragamonedas);
casino.agregarJuego(dados);

casino.mostrarJuegos();
