import { Casino } from './Casino';
import { Dados } from './Dados';
import { Ruleta } from './Ruleta';
import { Tragamonedas } from './Tragamonedas';

const casino = new Casino();

const juego1 = new Dados();
const juego2 = new Ruleta();
const juego3 = new Tragamonedas();

casino.agregarJuego(juego1);
casino.agregarJuego(juego2);
casino.agregarJuego(juego3);

console.log(casino.jugarTodos());
