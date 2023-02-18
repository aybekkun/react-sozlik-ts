// const ruToLatin = (str: string) => {};

// export const getKiril = (str: string): string => {
//   return "";
// };

// export const getLatin = (str: string): string => {
//   return "";
// };

export const getLang = () => {
  if (window.localStorage.getItem("lang") && window.localStorage.getItem("lang") === "kiril") {
    return false;
  }
  if (window.localStorage.getItem("lang") === "latin") {
    return true;
  }
  return true;
};
