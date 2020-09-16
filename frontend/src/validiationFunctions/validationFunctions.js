import { letters } from "./constants";

const checkLength = (str, min, max) => {
  const checkLength = str.length >= min && str.length <= max;
  if (checkLength === false) {
    throw new Error(`Error al validar. Debe medir entre ${min} y ${max} caracteres.`);
  }
};

const checkString = (str) => {
  const checkString = typeof str === "string";
  if (checkString === false) {
    throw new Error("Error al validar. Debe ser de tipo string.");
  }
};

const checkEmailSchema = (str) => {
  const stringSplitByAt = str.split("@");
  const checkEmail = stringSplitByAt.length === 2 && stringSplitByAt[1].split(".").length === 2;
  if (checkEmail === false) {
    throw new Error("Error al validar el email. Debe incluír una arroba y un punto.");
  }
};

const checkPasswordSchema = (str) => {
  const stringSplit = str.split("");
  const checkPassword =
    stringSplit.map((element) => letters.indexOf(element) > -1).includes(true) &&
    stringSplit.map((element) => Number.isNaN(parseInt(element))).includes(false);
  if (checkPassword === false) {
    throw new Error("Error al validar el password. Debe incluír al menos un número y una letra.");
  }
};

// Ejercicio Jest:
// Componer una TestSuite para una una función que valida el formato de un email.
// La función devolverá un true o false si el email es correcto.
const checkEmail = (str) => {
  return (
    str.length >= 2 &&
    str.length <= 40 &&
    typeof str === "string" &&
    str.split("@").length === 2 &&
    str.split("@")[1].split(".").length === 2
  );
};

export { checkLength, checkString, checkEmailSchema, checkPasswordSchema, checkEmail };
