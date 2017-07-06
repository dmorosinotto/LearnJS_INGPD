//EXPORT * RIESPORTA TUTTO IL CONTENUTO DI UN MODULO
export * from "./math";

//IMPORT CON NOME DI UN DEFAULT
import _exp from "./mathplus";

//ESPORTO ALTRE VARIABILI
export const e = _exp(1);
export var exp = _exp;