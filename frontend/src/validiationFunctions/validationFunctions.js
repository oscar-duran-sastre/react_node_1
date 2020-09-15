const checkLength = (str, min, max) => str.length >= min && str.length <= max;

const checkString = (str) => typeof str === "string";

const checkEmailSchema = (str) => {
  const splitByAt = str.split("@");
  return splitByAt.length === 2 && splitByAt[1].split(".").length === 2;
};

export { checkLength, checkString, checkEmailSchema };
