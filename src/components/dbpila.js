
import Dexie from "dexie";

export const dbpila = new Dexie("PilaYorkDB");

dbpila.version(1).stores({
  pila: "++id,valor", // ID autoincremental, valor es el nombre (ej. "coahuixco")
});
