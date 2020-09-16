// Ejercicio Jest:
// Componer una TestSuite para una una función que valida el formato de un email.
// La función devolverá un true o false si el email es correcto.
import { checkEmail, checkLength, checkString, checkEmailSchema } from "./validationFunctions";

test("email is correct", () => {
  expect(checkEmail("oscar@gmail.com")).toBeTruthy();
});

test("email is a string", () => {
  expect(checkEmail("hola@hola.com")).toBeTruthy();
});

test("email with two ats", () => {
  expect(checkEmail("hola@hola@hola.com")).toBeFalsy();
});

test("email with two dots", () => {
  expect(checkEmail("hola@hola.hola.com")).toBeFalsy();
});

test("email without at", () => {
  expect(checkEmail("hola.com")).toBeFalsy();
});

test("email without dot", () => {
  expect(checkEmail("hola@com")).toBeFalsy();
});

test("email length less than 2", () => {
  expect(checkEmail("a")).toBeFalsy();
});

test("email length more than 40", () => {
  expect(checkEmail("12345678901234567890123456789012345678901")).toBeFalsy();
});

// Ejercicio Jest Parte 2 (Opcional):
// Probar a componer algún conjunto de pruebas con funciones que utilicen excepciones
// (https://jestjs.io/docs/en/expect#tothrowerror según indica en la documentación, ojo: You must
// wrap the code in a function, otherwise the error will not be caught and the assertion will fail.)
test("email is a string", () => {
  expect(checkString("hola@h.com")).toBeUndefined();
});

test("email is not a string", () => {
  expect(() => {
    checkString(1234567890);
  }).toThrow();
});

test("email with two ats", () => {
  expect(() => {
    checkEmailSchema("hola@hola@hola.com");
  }).toThrow();
});

test("email with two dots", () => {
  expect(() => {
    checkEmailSchema("hola@hola.hola.com");
  }).toThrow();
});

test("email without at", () => {
  expect(() => {
    checkEmailSchema("hola.com");
  }).toThrow();
});

test("email without dot", () => {
  expect(() => {
    checkEmailSchema("hola@com");
  }).toThrow();
});

test("email length correct", () => {
  expect(checkString("hola@hola.com")).toBeUndefined();
});

test("email too short", () => {
  expect(() => {
    checkLength("a");
  }).toThrow();
});

test("email too long", () => {
  expect(() => {
    checkLength("12345678901234567890123456789012345678901");
  }).toThrow();
});

// Ejercicio Jest Parte 3 (Libre):
// Generar casos de prueba para las funciones que utilizamos en el proyecto de Redux.
