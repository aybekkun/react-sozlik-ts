import React from "react";
import { Link } from "react-router-dom";
const alphabet = [
  "A",
  "Á",
  "B",
  "C",
  "Ch",
  "D",
  "E",
  "F",
  "G",
  "Ǵ",
  "H",
  "I",
  "Í",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ń",
  "O",
  "Ó",
  "P",
  "Q",
  "R",
  "S",
  "Sh",
  "T",
  "U",
  "Ú",
  "V",
  "W",
  "X",
  "R",
  "Y",
  "Z",
  "#",
];
const Alphabet = () => {
  return (
    <div className="alphabet">
      <ul className="alphabet__list">
        {alphabet.map((item,i) => (
          <li className="alphabet__item" key={i}>
            <Link to={"/"}>
              {item}
              {item.toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alphabet;
