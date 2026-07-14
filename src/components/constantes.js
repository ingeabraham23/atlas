import db from "../db";

export const eliminarUltimaUnidad = async (ruta) => {
  // Buscar todas las unidades con la ruta dada, sin importar el tipo
  const ultimaUnidad = await db.unidades
    .where("ruta")
    .equals(ruta)
    .reverse()
    .first(); // Última unidad registrada para esa ruta

  if (ultimaUnidad) {
    await db.unidades.delete(ultimaUnidad.id);
    return true;
  }

  return false;
};

export const buscarYaonahuacParaPrediccion = async () => {
  // Paso 1: Obtener la última unidad en "sosa escuela" tipo blanco
  const unidadesYaonahuacPrediccion = await db.unidades
    .where({ ruta: "yaonahuac", tipo: "verde" })
    .sortBy("id");

  if (!unidadesYaonahuacPrediccion.length) return null;

  const ultimaUnidad = unidadesYaonahuacPrediccion.at(-1); // la de mayor id
  const { numeroUnidad } = ultimaUnidad;

  // Paso 2: Buscar todas las unidades con ese numeroUnidad
  const coincidencias = unidadesYaonahuacPrediccion.filter(
    (u) => u.numeroUnidad === numeroUnidad
  );

  if (coincidencias.length < 2) return null; // No hay penúltima

  // Paso 3: Obtener la penúltima (por orden de id)
  const penultima = coincidencias[coincidencias.length - 2];

  // Paso 4: Buscar su índice en el arreglo general
  const indice = unidadesYaonahuacPrediccion.findIndex((u) => u.id === penultima.id);

  if (indice === -1) return null;

  // Paso 5: Obtener esa unidad y las 2 siguientes
  const resultado = unidadesYaonahuacPrediccion.slice(indice, indice + 3);

  return resultado;
};

export const buscarHueyapanParaPrediccion = async () => {
  // Paso 1: Obtener la última unidad en "sosa escuela" tipo blanco
  const unidadesHueyapanPrediccion = await db.unidades
    .where({ ruta: "hueyapan", tipo: "verde" })
    .sortBy("id");

  if (!unidadesHueyapanPrediccion.length) return null;

  const ultimaUnidad = unidadesHueyapanPrediccion.at(-1); // la de mayor id
  const { numeroUnidad } = ultimaUnidad;

  // Paso 2: Buscar todas las unidades con ese numeroUnidad
  const coincidencias = unidadesHueyapanPrediccion.filter(
    (u) => u.numeroUnidad === numeroUnidad
  );

  if (coincidencias.length < 2) return null; // No hay penúltima

  // Paso 3: Obtener la penúltima (por orden de id)
  const penultima = coincidencias[coincidencias.length - 2];

  // Paso 4: Buscar su índice en el arreglo general
  const indice = unidadesHueyapanPrediccion.findIndex((u) => u.id === penultima.id);

  if (indice === -1) return null;

  // Paso 5: Obtener esa unidad y las 2 siguientes
  const resultado = unidadesHueyapanPrediccion.slice(indice, indice + 3);

  return resultado;
};