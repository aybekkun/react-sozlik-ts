import React from "react";
import Card from "../../components/Card";
const categories = ["Atlıq", "Sanlıq", "Kelbetlik", "Ráwish", "Feyil", "Almasıq"];
const WordsInfo = () => {
  return (
    <div className="words__info">
      <ul className="categories">
        {categories.map((item, i) => (
          <li className="categories__item">{item}</li>
        ))}
      </ul>
      <Card />
    </div>
  );
};

export default WordsInfo;
