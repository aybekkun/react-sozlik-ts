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

export function translit(word: string) {
  var answer = "";

  var converter = {
    А: "А",
    Ә: "Á",
    Б: "B",
    В: "V",
    Г: "G",
    Ғ: "Ǵ",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "J",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Қ: "Q",
    Л: "L",
    М: "M",
    Н: "N",
    Ң: "Ń",
    О: "O",
    Ө: "Ó",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ү: "Ú",
    Ў: "W",
    Ф: "F",
    Х: "X",
    Ҳ: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sh",
    Ъ: "",
    Ы: "Í",
    Ь: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
    a: "а",
    ә: "á",
    б: "b",
    в: "v",
    г: "g",
    ғ: "ǵ",
    д: "d",
    е: "e",
    ё: "e",
    ж: "j",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    қ: "q",
    л: "l",
    м: "m",
    н: "n",
    ң: "ń",
    о: "o",
    ө: "ó",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ү: "ú",
    ў: "w",
    ф: "f",
    х: "x",
    ҳ: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sh",
    ъ: "",
    ы: "í",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  for (var i = 0; i < word.length; ++i) {
    // @ts-ignore
    if (converter[word[i]] == undefined) {
      answer += word[i];
    } else {
      // @ts-ignore
      answer += converter[word[i]];
    }
  }

  return answer;
}
