const checkLength2To40 = (str) => str.length >= 2 && str.length <= 40;

const checkString = (str) => typeof str === "string";

const checkEmailSchema = (str) => {
  const splitByAt = str.split("@");
  return splitByAt.length === 2 && splitByAt[1].split(".").length === 2;
};

export { checkLength2To40, checkString, checkEmailSchema };
