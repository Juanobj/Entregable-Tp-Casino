import { Casino } from "./Casino";
import { Tragamonedas } from "./Tragamonedas";
import { Ruleta } from "./Ruleta";
import { Dados } from "./Dados";

const miCasino = new Casino();
miCasino.agregarJuego(new Tragamonedas());
miCasino.agregarJuego(new Ruleta());
miCasino.agregarJuego(new Dados());

miCasino.jugarTodos();
