// сделать букву в названии города заглавной
export const capitalize = (str) => {
  const stringArray = str.split(/([\s-(])/g);
  return stringArray
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join("");
};
