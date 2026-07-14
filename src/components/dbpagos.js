import Dexie from 'dexie';

const dbpagos = new Dexie('SistemaPagosYorkDB');
dbpagos.version(1).stores({
  pagos: '++id,unidad,monto,tipo,fecha',
});

export default dbpagos;